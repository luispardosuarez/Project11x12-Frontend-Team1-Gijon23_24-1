 
   <script setup>
   import { defineProps } from 'vue';
   
   const props = defineProps({
    camp: Object,
   });
   </script>

<template>
    <div class="card">
       <div class="card-body">
         <h5 class="card-title">{{ camp.camp_name }}</h5>
         <p class="card-text">{{ camp.description }}</p>
         <div class="card-details">
           <p><strong>Fecha de inicio:</strong> {{ camp.start_date }}</p>
           <p><strong>Fecha de fin:</strong> {{ camp.end_date }}</p>
           <p><strong>Horario:</strong> {{ camp.schedule }}</p>
           <p><strong>Tipo de Semana:</strong> {{ camp.numdays }} días</p>
           <p><strong>Precio:</strong> {{ camp.price }}</p>
                   </div>
       </div>
    </div>
   </template>
  
   
   <style scoped>
   .card {
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 20px;
   }
   
   .card-body {
    padding: 20px;
   }
   
   .card-title {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
   }
   
   .card-text {
    margin-bottom: 20px;
    font-size: 16px;
    color: #333;
   }
   
   .card-details {
    font-size: 14px;
    color: #666;
   }
   
   .card-details p {
    margin-bottom: 10px;
   }
   </style>