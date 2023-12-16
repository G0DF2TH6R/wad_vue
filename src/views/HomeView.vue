<template>
  <Header/>
    <button v-if = "authResult" @click="Logout">Logout</button>
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
import auth from "../auth";

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    LeftContent,
    RightContent,
    Posts
  },
  data: 
    function() {
        return {
            //goes to auth.js for authentication
            authResult: auth.authenticated()
        }
    },
  methods: {
    ResetAllLikes: function() {
        this.$store.dispatch("ResetAllLikesAct");
    },
    Logout() {
        fetch("http://localhost:3000/auth/logout", {
            credentials: 'include', // for cookies
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log('jwt removed');
            this.$router.push("/login");
        })
        .catch((e) => {
            console.log(e);
            console.log("error logout");
        });
    },
    
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
    text-decoration: unset;
    padding: 5px;
    font-weight: bold;
    color: #292e28;
    background-color: #9cc8b4;
    margin-left: 1vh;
    margin-right: 1vh;
    border-radius: 10px;
    border-width: 1px;
    padding: 6px;
    padding-left: 10px;
    padding-right: 10px;

  }

  nav a.router-link-exact-active {
      background-color: #5a8571;
  }

  footer {
    text-align: center;
  }

  .posts {
    width: 60%;
  } 

  button {
        
    background-color: #9cc8b4;
    border-radius: 10px;
    border-width: 0px;
    padding: 6px;
    padding-left: 10px;
    padding-right: 10px;
  }

  button:hover {
    cursor: pointer;
  }

  
</style>
