<script setup>

import RegisterComponet from '@/components/login/RegisterComponet.vue';


</script>

<template>

<div class="register">
    <RegisterComponet />
</div>


</template>


<style lang="scss" scoped>

.register{
    background-image: url(../../src/assets/imageLogin/hands0.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    
}

@media only screen and (max-width: 767px) {


.register{

    background-size: cover;
    background-position: center;
}

}


@media only screen and (min-width: 992px) {
    .register {
        background-size: cover;
        background-position: center;
    }
}

</style>
