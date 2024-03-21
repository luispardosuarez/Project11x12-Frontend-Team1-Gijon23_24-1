<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);

</script>

<template>

<header class="wrapper">

<div id="headerContainer">

    <img class="logo" src="../../assets/icons/gijon.png" alt="">

    <div class="headerLinkLogged" v-if="isLoggedIn">
        <RouterLink class="routerLink" to="/"> <img src="../../assets/icons/home.svg"> </RouterLink>
        <RouterLink class="routerLink" to="/"> <img src="../../assets/icons/user.svg"> </RouterLink>
        <RouterLink class="routerLink" to="/" @click="store.logout()"> <img src="../../assets/icons/signout.svg"> </RouterLink>
    </div>

    <div class="headerLink" v-else>
        <RouterLink class="routerLink" to="/about">Iniciar sesión</RouterLink>
    </div>

</div>

</header>


</template>

<style lang="scss">

.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

#headerContainer {
    width: 100%;
    height: 10vh;
    background-color: $black;
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

.logo {
    width: 30%;
    padding: 19px;
    margin-right: 150px;
}

.headerLink {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 15px;
}

.headerLinkLogged {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
        width: 70%;
    }
}

.routerLink {
    text-decoration: none;
    color: white;
}

img {
    height: 90%;
}

@media only screen and (min-width: 768px){
    .logo {
        width: 7%;
        margin-left: 30px;
        padding: 10px;
    }

    .headerLink {
        margin-right: 3%;
    }

    .headerLinkLogged {
        
        img {
            width: 40%;
        }
    }
}
</style>