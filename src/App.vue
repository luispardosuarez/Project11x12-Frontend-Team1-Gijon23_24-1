<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/general/Footer.vue';
import Header from './components/general/Header.vue';
</script>

<template>
<<<<<<< HEAD
  <header>


    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
=======
>>>>>>> dev

  <Header />
  <RouterView />
  <Footer />
  
</template>

<style scoped>

</style>
