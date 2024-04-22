<script setup>
import { ref } from 'vue';
import PopUpAddCamp from './PopUpAddCamp.vue';

const showPopup = ref(false);
</script>

<template>
    <div class="admin-panel">
      <button class="add-button btn btn-danger" @click="showPopup = true">Añadir Campamento</button>
      
      <div v-if="showPopup" class="popup">
       <PopUpAddCamp/>
       <button type="button" class="btn-close " aria-label="Close" @click="showPopup = false"></button>
       
      </div>
    </div>
  </template>
  
  
  <style lang="scss">
  .admin-panel {
    background-color: rgba(217, 217, 217, 1);
  
    .popup {
      width: 70%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color:$gray-form;
    
      border: 1px solid #ccc;
      z-index: 9999;
      
      button {
        margin-top: 10px;
      }
      .btn-close{
        position: relative;
        top: -54rem;
        left: 53rem;
        font-size: x-large;
        color: $gray-form;
            }
    }
  }
  </style>
  