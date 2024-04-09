<script setup>

import LoginComponet from '@/components/login/LoginComponet.vue';
</script>

<template>

    <div class="login">
        <LoginComponet />
    </div>

</template>

<style>

.login{
    background-image: url(../../src/assets/imageLogin/torre.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    object-fit: cover;
}


/* @media only screen and (min-width: 767px) {


.login{

    background-size: cover;
    background-position: center;
}

} */




</style>