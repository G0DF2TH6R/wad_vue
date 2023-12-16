<template>
    <body>
        <h5>Add post</h5>
        <label>Body</label>
        <input class="input" name="postBody" id="postBody" v-model="postBody" placeholder="body" required>
        <button @click="Addpost" class="but">Add</button>
    </body>
</template>

<script>
export default {
    name: "Addpost",
    data() {
        return {
            postBody: ""
        }
    },
    methods: {
        Addpost() {
            fetch("http://localhost:3000/addpost"), {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(this.postBody),
            }
        }   
    }
}
</script>

<style scoped>
body {
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