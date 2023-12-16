<template>
    <body>
        <h1>Contact us:</h1>
        <h2>friends@ut.eu</h2>
        <h2>Narva mnt 18 <br> 51009 Tartu </h2>
    </body>
</template>

<script>

export default {
    name: 'ContactUs',

}
</script>

<style scoped>
    body {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: auto;
        padding: 25px;
        background-color: #DFE6DA;
        justify-content: center;
        border-radius: 1rem;
    }
    h2 {
        color: rgb(61, 36, 27);
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: large;
    }
    h1 {
        color: rgb(61, 36, 27);
        font-size: x-large;
    }
</style>
