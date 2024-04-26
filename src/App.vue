<script setup>
import {  RouterView } from 'vue-router';
import Footer from './components/general/Footer.vue';
import Header from './components/general/Header.vue';
import HeaderF5 from './components/general/HeaderF5.vue';


</script>

<template>

  <HeaderF5 /> 
  <Header />
  <RouterView  />
  <Footer />
  
</template>

<style scoped>

</style>
