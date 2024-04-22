<script setup>
import { ref } from 'vue';
import PopUpAddCamp from './PopUpAddCamp.vue';
import TableCamps from './TableCamps.vue';

const showPopup = ref(false);
</script>

<template>
  <TableCamps/>
    <div class="admin-panel">
      <button class="add-button " @click="showPopup = true">Añadir Campamento</button>
      
      <div v-if="showPopup" class="popup">
       <PopUpAddCamp/>
       <button type="button" class="btn-close " aria-label="Close" @click="showPopup = false"></button>
       
      </div>
    </div>
  </template>
  
  
  <style lang="scss">
  .admin-panel {
    
  font-family: Arial;


  background-color: $gray-form;
  padding: 1%;
  display: flex;
    column-gap: 0.7%;
    align-items: center;
    justify-content: space-between;
 
  .add-button{
        color: white;
        background-color: $red;
        border: none;
    }
  
    .popup {
      width: 50%;
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
        position: fixed;
        top: 10px;
        right: 10px;
    font-size: x-large;
    color: #ECE7E7;
        z-index: 9999; 
            }
    }
  }
  
  

   
  
  </style>
  
