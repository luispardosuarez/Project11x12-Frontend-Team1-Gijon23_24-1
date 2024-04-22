<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.js';

const authStore = useAuthStore();
const router = useRouter();

const goToHome = () => {
    router.push({ path: '/' });
};

const goToDashboard = () => {
    if (authStore.user.roles === "ROLE_ADMIN") {
        router.push({ path: '/admin' });
    } else if (authStore.user.roles === "ROLE_USER") {
        router.push({ path: '/user' });
    } else {
        router.push({ path: '/' });
    }
};

const logout = () => {
    authStore.userLogout(); 
    router.push({ path: '/' }); 
};
</script>

<template>
    <div id="headerLoggedContainer">
        <div class="logoContainer" @click="goToHome">
            <img src="../../assets/icons/gijon.png">
        </div>
        <div class="homeLoggedContainer">
            <img src="../../assets/icons/home.svg" @click="goToHome">
            <img src="../../assets/icons/user.svg" @click="goToDashboard">
            <img src="../../assets/icons/signout.svg" @click="logout">
        </div>
    </div>
</template>

<style lang="scss" scoped>

#headerLoggedContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $black;
    padding: 10px;
    width: 100%; 

    .logoContainer {
        padding: 5px;
        img {
            width: 60px;
            margin-right: 5px;
            max-width: 100%;
            height: auto;
        }
    }
    .homeLoggedContainer {
        display: flex;
        margin-left: 45px;
        img {
            width: 35px;
            padding: 5px;
        }
    }
}

@media only screen and (min-width: 768px) {
#headerLoggedContainer {

    .logoContainer {
        img {
            width: 85px;
            margin-left: 20px;
        }
    }
    .homeLoggedContainer {
     
       img {
        width: 50px;
        padding: 10px;
       }
    }
}
}

</style>
