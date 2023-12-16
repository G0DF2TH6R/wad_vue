<template>
    <div class="post">
        <div class="postHeader">
            <div style="display: flex;">
                <img src="@/assets/placeholderProfilePicture.png" class="postProfileIcon">
                <p>{{ postInfo.author }}</p>
            </div>
            <p style="margin-right: 5px;">{{ postInfo.date }}</p>
        </div>
        <img class="postImage" v-if="postInfo.image" :src="postInfo.image">
        <p class="postText">{{ postInfo.body }}</p>
        <div class="likeInfo">
            <button v-on:click="IncreaseLike(postInfo.id)"><img src="@/assets/likeIcon.png"></button>
            <p>Likes: {{ postInfo.likes }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        postInfo: {
        }
    },
    methods: {
        IncreaseLike: function(id) {
            this.$store.dispatch("IncreaseLikeAct", id)
        }
    }
}
</script>

<style>
    .post {
        border: solid darkgray 1px;
        width: 90%;
        margin-left: 5%;
        margin-top: 10px;
    }

    .postHeader {
        display: flex;
        justify-content: space-between;
        height: 60px;
    }

    .postProfileIcon {
        padding-right: 5px;
        height: 90%;
        border-radius: 50%;
    }

    .postImage {
        width: 98%;
        object-fit: contain;
    }

    .postText {
        margin-left: 10px;
        text-align: justify;
    }

    .likeInfo {
        display: flex;
        justify-content: space-between;
        margin-right: 5px;
        margin-left: 5px;
    }

    .likeInfo img {
        height: 50px;
    }

    .likeInfo button {
        all: unset;
        cursor: pointer;
    }

</style>