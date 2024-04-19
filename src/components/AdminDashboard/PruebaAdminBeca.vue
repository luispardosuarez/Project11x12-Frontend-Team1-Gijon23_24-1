<script setup>
import { ref } from 'vue';

const showList = ref(false);
const dniList = ref(["12345678", "98765432", "54321098"]); //  DNI

const showBecados = () => {
  showList.value = !showList.value;
};

const editDni = (index) => {
  const newDni = prompt("Nuevo DNI:");
  if (newDni) {
    dniList[index] = newDni;
  }
};

const deleteDni = (index) => {
  dniList.splice(index, 1);
};

const showCampamentos = () => {
  
};

const showInscritos = () => {
  
};
</script>



<template>
    <div class="app">
      <h1>¡Hola Admin!</h1>
      <div class= button-container>
      
        <button class="small-button" @click="showBecados">Becados</button>
        <button class="small-button" @click="showCampamentos">Campamentos</button>
        <button class="small-button" @click="showInscritos">Inscritos</button>
      </div>
      <img src="@/assets/img/11x12.jpg" alt="" class= "my-image" />
      <div class="dni-list-container">
      <ul v-if="showList" >
        <li v-for="(dni, index) in dniList" :key="index">
          {{ dni }}
          <button @click="editDni(index)">Editar</button>
          <button @click="deleteDni(index)">Borrar</button>
        </li>
      </ul>
    </div>
    </div>
  </template>
  
  
    
  <style scoped>
  .app {
   font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
  }
  .button-container {
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  margin-bottom: 10px;
  
}

  .small-button {
    margin: 8px;
    padding: 10px 25px;
    background-color: #D0003E;
    font-size: 14px;
    color: #fff;    
    border: none;
    cursor: pointer;
    width: 120px;
  }
  .my-image {
  max-width: 9%; 
  display: block;
  margin-left: 0;
  
}
.dni-list-container {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  margin-top: 0; 
}

  ul {
   list-style: none;
    padding: 0;
  }
  
  li {
    margin: 10px;
  }
  </style>