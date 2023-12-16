<template>
    <div class="right-content">
        <h1>Total likes: {{ totalLikes }}</h1>
    </div>
</template>

<script>

export default {
    name: 'RightContent',
    
    computed: {
        totalLikes() {
        return this.$store.getters.getTotalLikes;
    }
    },
    

}
</script>

<style scoped> 
    .right-content {
        display: flex;
        flex-direction: column;
        top: 5px;
    }


    h1 {
        font-size: medium;
        margin-left: 5vh;
    }
</style>