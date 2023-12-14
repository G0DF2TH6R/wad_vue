<template>
    <Header/>
    <ContactUs />
    <Footer/>
    
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import ContactUs from '@/components/ContactUs.vue';

export default {
    name: 'ContactUsView',
    components: {
        Header,
        ContactUs,
        Footer
    }
}
</script>
