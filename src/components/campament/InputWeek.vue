<script setup>
import { defineProps } from 'vue';

const props = defineProps({
 weeks: Array,
});
</script>
<template>
  <li class="nav-item dropdown">
     <div class="custom-select">
       <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Seleccionar Semanas:
       </a>
       <ul class="dropdown-menu">
         <li class="weeks">
          
           <div v-for="(week, index) in weeks" :key="index" class="week-option">
             <input class="m-3" type="checkbox" :id="`week-${index}`" v-model="week.selected" />
             <label :for="`week-${index}`">{{ week.start.toLocaleDateString() }} - {{ week.end.toLocaleDateString() }}</label>
           </div>
         </li>
       </ul>
     </div>
  </li>
 </template>



<style scoped>
li{
  list-style: none;
.custom-select {
 font-size: large;
 border: 1px solid #ccc;
 padding: 5px;
 cursor: pointer;
ul{
  width: 20rem;
  padding: 1rem;
}
 .week-option {
    display: block;

    input[type="checkbox"] {
      transform: scale(2);
      margin-right: 10px; 
    }
 }
}}
</style>