const Pool = require('pg').Pool;
const password = process.env.PASSWORD;
const pool = new Pool({
    user: "postgres",
    password: password,
    database: "WAD_project",
    host: "localhost",
    port: "5432"
});

const execute = async(query1,query2) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query1); // sends queries
        await pool.query(query2);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};


const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	"id" SERIAL PRIMARY KEY,         
	"body" VARCHAR(200) NOT NULL,
    "urllink" TEXT,
    "post_date" DATE NOT NULL
    );`;

const createTblQuery2 = `
CREATE TABLE IF NOT EXISTS "users" (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL 
);`;

// A function to execute the previous queries  
execute(createTblQuery1,createTblQuery2).then(result => {
    if (result) {
        console.log('If does not exists, create the "posttable" table');
    }
});

module.exports = pool;