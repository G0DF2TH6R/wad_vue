const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
//const { default: auth } = require('@/auth.js');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
// "credentials: true" to allow cookies to be represented  

app.use(express.json());  // exporess is for handling requests
app.use(cookieParser());  // for populating req.cookies with an object keyed by the cookie names.

const secret = "gdgdhdbcb770785rgdzqws";
const maxAge = 60 * 60;
const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
}

//check if user is autheticated and can access things
app.get("/auth/authenticate", async(req,res) => {
    console.log("get request for authentication");
    const token = req.cookies.jwt; //assign the token variable user credentials with jwt
    console.log("token: " + token);
    let authenticated = false;

    try {
        if (token) { // is user authenticated
            await jwt.verify(token, secret, (err) => {
                if (err) { //token not verified
                    console.log("token is not verified")
                    res.send({"authenticated": authenticated})//send false
                }
                else {//token is verified
                    console.log("user is verified")
                    authenticated = true;
                    res.send({"authenticated": authenticated});                
                }
            })
        }
        else { //token doesnt exist
            console.log("author is not authenticated!!");
            res.send({"authenticated": authenticated});//send false
        }
    }
    catch (err) {
        console.log("some other error with authentication veirfing")
        console.error(err.message);
        res.status(400).send(err.message);
    }
})

app.post("/auth/signup", async(req,res) => {
    try {
        console.log("a signup request came")
        const {email,password} = req.body;
        const salt = await bcrypt.genSalt();
        const bcryptPassword = await bcrypt.hash(password,salt);
        const authUser = await pool.query(
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        console.log("added to the database user id: " + authUser.rows[0].id);
        const token = await generateJWT(authUser.rows[0].id);//make the cookie
        //lastly prepare the response and send it
        res 
        .status(201)
        .cookie('jwt', token, {maxAge: 6000000, httpOnly: true})
        .json({user_id: authUser.rows[0].id})
        .send;
    }
    catch (e) {
        console.log("error in server.js signup post")
        console.error(e.message);
        res.status(400).send(e.message);
    }
});

app.post('/auth/login', async(req, res) => {
    try {
        console.log("a login request has arrived");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        //if there isnt any email like that in database
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });

        //see if the password is correct (compares the hashes)
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        console.log("validPassword:" + validPassword);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);//make cookie

        //prepare the response and send it
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

app.get("/auth/logout", (_req, res) => {
    console.log("request for deleting jwt");
    res.status(202).clearCookie("jwt").json({"Msg": "cookie cleared" }).send
})

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});
