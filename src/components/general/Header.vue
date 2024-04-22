<script setup>

import { useAuthStore } from '@/stores/auth.js';
import HeaderLogged from './HeaderLogged.vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();

const router = useRouter();

const goToLogin = () => {
    router.push({ path: '/login' });
};

const goToHome = () => {
    router.push({ path: '/' });
};

</script>

<template>

    <div id="headerContainer">
        <div v-if="!authStore.user.isAuthenticated" class="logo" @click="goToHome">
            <img class="logo" src="../../assets/icons/gijon.png">
        </div>
        <div v-if="!authStore.user.isAuthenticated" class="homeContainer" @click="goToLogin">
            <h2 class="homeContainer">Iniciar sesión</h2>
        </div>
        <HeaderLogged v-if="authStore.user.isAuthenticated"/>
    </div>

</template>

<style lang="scss" scoped>

#headerContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: $black;
    padding: 10px;

    .logo {
        padding: 5px;
        img {
            width: 60px;
            margin-right: 5px;
            max-width: 100%;
            height: auto;
        }
    }

    .homeContainer {
        h2 {
        color: white;
        font-size: 15px;
        padding: 5px;
        margin-top: 10px;
        font-family: Arial, Helvetica, sans-serif;
        }
    }
}

 @media only screen and (min-width: 768px) {
 #headerContainer {
  .logo {
      img {
      width: 90px;
      margin-left: 20px;
     }
   }  
} 
}

</style>