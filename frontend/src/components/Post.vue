<template>
    <div @click="ClickedAPost(postInfo.id)" class="post">
        <div class="postHeader">
            <p style="margin-right: 5px;">{{ new Date(postInfo.post_date).toDateString() }}</p>
        </div>
        <img class="postImage" v-if="postInfo.urllink" :src="postInfo.urllink">
        <p class="postText">{{ postInfo.body }}</p>
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
        ClickedAPost(postId) {
            this.$router.push(`/UpdatePostView/${postId}`);
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
        cursor: pointer;
    }

    .post:hover {
        cursor: pointer;
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