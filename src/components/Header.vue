<template>
    <nav>
        <h1>Welcome to PostIt!</h1>
        <RouterLink to="/" v-if = "authResult" class="link">Home</RouterLink>
        <RouterLink to="/login" class="link">Login</RouterLink>
        <RouterLink to="/contactUs" class="link">Contact</RouterLink>
    </nav>
</template>

<script>
import auth from "../auth";

export default {
    name: 'Header',

    data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
        }
    }
}
</script>

