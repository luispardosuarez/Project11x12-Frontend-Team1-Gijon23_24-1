<script setup>
import { ref } from 'vue';
import PopUpAddCamp from './PopUpAddCamp.vue';

const showPopup = ref(false);
</script>

<template>
    <div class="admin-panel">
      <button class="add-button" @click="showPopup = true">Añadir Campamento</button>
      
      <div v-if="showPopup" class="popup">
       <PopUpAddCamp/>
        <button @click="showPopup = false">Cerrar</button>
      </div>
    </div>
  </template>
  
  
  <style lang="scss">
  .admin-panel {
    background-color: rgba(217, 217, 217, 1);
    
    .popup {
     
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color:$gray-form;
      padding: 20px;
      border: 1px solid #ccc;
      z-index: 9999;
      
      button {
        margin-top: 10px;
      }
    }
  }
  </style>
  