<template>
    <div class="posts" >
        <Post v-for="post in data" :postInfo="post" />
    </div>
</template>

<script>
import Post from './Post.vue';

export default {
    name: 'Posts',
    components: {
    Post
    },
    data() {
        return {
            data: []
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            fetch("http://localhost:3000/api/posts")
                .then(response => response.json())
                .then(data => {
                    this.data = data;
                })
                .catch(error =>{
                    console.log(error)
                });

        }

    }
}


</script>

<style>
    .posts {
        background-color: #DFE6DA;
        border-radius: 15px;
        color: black;
        padding-top: 5px;
        padding-bottom: 15px;
    }
</style>
