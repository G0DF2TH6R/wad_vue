<template>
    <form v-on:submit.prevent>
        <h5>Add post</h5>
        <input class="input" name="postBody" id="postBody" v-model="postBody" placeholder="Caption" required>
        <input class="input" name="postLink" id="postLink" v-model="postLink" placeholder="Picture URL" required>
        <button @click="AddPost" class="but">Add</button>
    </form>
</template>

<script>
export default {
    name: "Addpost",
    data() {
        return {
            postBody: "",
            postLink: ""
        }
    },
    methods: {
        async AddPost() {
            const new_post = {body: this.postBody, urlLink: this.postLink};
            await fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(new_post)
            })

            location.assign('#/')
        }   
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    padding: 25px;
    background-color: #DFE6DA;
    justify-content: center;
    border-radius: 1rem;
}

label {
        color: black;
        font-size: medium;
        margin-bottom: 10px;
}

.input {
    font-size: 16;
    padding: 8px;
    margin-bottom: 10px;

}

h5 {
    color: black;
    font-size: x-large;
}


</style>