<template>
    <form v-on:submit.prevent="validation" class="form">
        <label class="lable" for="email">Email</label>
        <input class="fInput" type="email" name="email" id="email1" v-model="email" placeholder="email" required>
        <label class="lable" for="password">Password</label>
        <input class="fInput" type="password" name="password" id="pass1" v-model="password" placeholder="password" required>
        
        <div v-if="passwordErrors.length > 0" class="error-message">
            <p>Unable to sign up. Please follow the conditions:</p>
            <ul>
                <li v-for="error in passwordErrors" :key="error">{{ error }}</li>
            </ul>
        </div>

        <div class="buttonsRow">
            <button type="submit"  class="but" @click="handleSignUp">signUp</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "signUpForm",
        data() {
            return {
                password: "",
                email: "",
                passwordErrors: [],
            };
        },
        methods: {
            validation: function() {
            this.passwordErrors = [];

            if (this.password.length <= 8 || this.password.length >= 15) {
                this.passwordErrors.push("Password should be between 8 and 15 characters.");
            }

            if (!/^[A-Z]/.test(this.password)) {
                this.passwordErrors.push("Password should start with an uppercase alphabet character.");
            }

            if ((this.password.match(/[a-z]/g) || []).length < 2) {
                this.passwordErrors.push("Password should include at least two lowercase alphabet characters.");
            }

            if (!/\d/.test(this.password)) {
                this.passwordErrors.push("Password should include at least one numeric value.");
            }

            if (!/_/.test(this.password)) {
                this.passwordErrors.push("Password should include the character '_'.");
            }

            if (this.passwordErrors.length === 0) {
                console.log("Password is valid");
                
            }

            },
            handleSignUp() {
                this.validation(); 
                if (this.passwordErrors.length === 0) {
                    this.SignUp();
                }

            },
            async SignUp() {
                var data = {
                    email: this.email,
                    password: this.password
                };
                
                    const response = await fetch("http://localhost:3000/auth/signup", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                    
                    console.log(response.status)

                    switch (response.status) {
                        case 400:
                            this.passwordErrors.push("This email is already in use");
                    }

                    return response.json();
                


            }
},
};
</script>

<style>


    .form{
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: auto;
        padding: 25px;
        background-color: #DFE6DA;
        justify-content: center;
        border-radius: 1rem;
        
    }
    
    .fInput{
        font-size: 16;
        padding: 8px;
        margin-bottom: 10px;
    }

    .but{
        margin: auto;
        background: #5E5DF0;
        border-radius: 999px;
        color: #FFFFFF;
        cursor: pointer;
        font-size: 16px;
        line-height: 24px;
        padding: 8px 18px;
        width: fit-content;
        margin-top: 10px;
    }

    .lable{
        color: black;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 24px;
    }

    .error-message {
        color: red;
        margin-top: 10px;
    }

    .error-message ul {
        list-style-type: none;
    }

    .buttonsRow{
        display: flex;
        justify-content: space-evenly ;
        color: black;
        font-size: 20px;
    }



</style>