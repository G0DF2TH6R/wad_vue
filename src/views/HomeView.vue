<template>
  <Header/>
  <div class="wrapper">
    <LeftContent/>
    <Posts/>
    <RightContent/>
  </div>
  <button v-on:click="ResetAllLikes">Reset Likes</button>
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
  },
  methods: {
      ResetAllLikes: function() {
          this.$store.commit("ResetAllLikes")
      }
  }
  
}
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  nav {
      padding: 10px;
  }

  nav a {
      padding: 5px;
      font-weight: bold;
      color: #cde7ca;
  }

  nav a.router-link-exact-active {
      color: #42b983;
  }

  footer {
    text-align: center;
  }

  .posts {
    width: 60%;
  }
</style>
