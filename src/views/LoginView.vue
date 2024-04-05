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
    font-weight: 800;
    
}

</style>