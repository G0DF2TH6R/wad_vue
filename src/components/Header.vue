<template>
    <nav>
        <h1>Header component</h1>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
    </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>


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
</style>