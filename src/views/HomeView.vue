<template>
  <Header/>
  <div class="wrapper">
    <LeftContent/>
    <Posts/>
    <RightContent/>
  </div>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import LeftContent from '@/components/LeftContent.vue';
import RightContent from '@/components/RightContent.vue';
import Posts from '@/components/Posts.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    LeftContent,
    RightContent,
    Posts
  }
}
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>
