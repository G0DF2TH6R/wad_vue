<template>
    <form v-on:submit.prevent class="form">
        <label class="lable" for="email">Email</label>
        <input class="fInput" type="email" name="email" id="email1" v-model="email" placeholder="email" required>
        <label class="lable" for="password">Password</label>
        <input class="fInput" type="password" name="password" id="pass1" v-model="password" placeholder="password" required>
        
        <div v-if="errors" class="error-message">
            <p>Unable to log in. The email or password is incorrect.</p>
        </div>

        <div class="buttonsRow">
            <button @click="LogIn" class="but">login</button>
            <p>Or</p>
            <button @click="$router.push('/signUp')" class="but">Signup</button>
        </div>
    </form>
</template>
    
<script>
    export default {
        name: "LoginForm",
        data() {
            return {
            password: "",
            email: "",
            errors: false
            };
        },
        methods: {
            async LogIn() {
                var data = {
                email: this.email,
                password: this.password
                };

                const response = await fetch("http://localhost:3000/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: 'include',
                    body: JSON.stringify(data)
                })
                

                switch (response.status) {
                    case 401:
                        this.errors = true;
                        break;
                    case 201:
                        this.errors = false
                        this.$router.push('/')
                        break;
                }


                return await response.json();
            }
        }
    }
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

    .buttonsRow{
        display: flex;
        justify-content: space-evenly ;
        color: black;
        font-size: 20px;
    }



</style>