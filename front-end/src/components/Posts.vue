<template>
    <div class="posts" >
        <Post v-for="post in posts" :postInfo="post" />
    </div>
</template>

<script>
import Post from './Post.vue';

export default {
    name: 'Posts',
    components: {
    Post
    },
    computed: {
        posts() {
            return this.$store.getters.getAllPosts;
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
