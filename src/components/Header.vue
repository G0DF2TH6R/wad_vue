<template>
    <nav>
        <h1>Welcome to PostIt!</h1>
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/login" class="link">Login</RouterLink>
        <RouterLink to="/contactUs" class="link">Contact</RouterLink>
    </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>

