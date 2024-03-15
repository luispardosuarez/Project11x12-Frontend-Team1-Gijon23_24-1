<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/general/Footer.vue';
</script>

<template>
  <header>


    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <Footer />
</template>

<style scoped>

</style>
