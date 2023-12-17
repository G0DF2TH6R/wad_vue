<template>
    <body>
        <h5>Update post</h5>
        <label>Body</label>
        <input class="input" name="postBody" id="postBody" v-model="postBody" placeholder="Caption" required>
        <input class="input" name="postLink" id="postLink" v-model="postLink" placeholder="Picture URL" required>
        <button @click="UpdatePost" class="but">Update</button>
        <button @click="DeletePost" class="but">Delete</button>
    </body>
</template>

<script>
export default {
    name: "UpdatePost",
    props: {
        postInfo: {

        }
    },
    data() {
        return {
            postBody: ""
        }
    },
    methods: {
        UpdatePost() {
            const postId = this.$route.params.id;
            fetch(`http://localhost:3000/api/posts/${postId}`), {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({body: this.postBody, urlLink: this.postLink}),
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