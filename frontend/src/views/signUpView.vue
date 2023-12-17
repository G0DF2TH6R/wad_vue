<template>
  <Header/>
  <SignUpForm/>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import SignUpForm from '@/components/signUpForm.vue';


export default {
  name: 'signUpView',
  components: {
    Header,
    Footer,
    SignUpForm
  },

  data: function() {
    return {
      email: '',
      password: '',
    }  
  },
  methods: {

    
    
  }
}
</script>