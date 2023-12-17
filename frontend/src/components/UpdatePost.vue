<template>
    <body>
        <h5>Update post</h5>
        <label>Body</label>
        <input class="input" name="postBody" id="postBody" v-model="postBody" placeholder="Caption" required>
        <input class="input" name="postLink" id="postLink" v-model="postLink" placeholder="Picture URL" required>
        <button @click="UpdatePost" class="but">Add</button>
    </body>
</template>

<script>
export default {
    name: "UpdatePost",
    data() {
        return {
            postBody: ""
        }
    },
    methods: {
        UpdatePost: async function() {

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