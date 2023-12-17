<template>
    <Header/>
    <AddPost/>
</template>

<script>
import AddPost from "@/components/AddPost.vue";
import Header from "@/components/Header.vue";

export default {
    name: "AddPostView",
    components: {
        AddPost,
        Header
    }

}
</script>