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
  // Lógica para mostrar campamentos
};

const showInscritos = () => {
  // Lógica para mostrar inscritos
};
</script>



<template>
    <div class="app">
      <h1>Mis Becados</h1>
      <div class="buttons">
        <button @click="showBecados">Becados</button>
        <button @click="showCampamentos">Campamentos</button>
        <button @click="showInscritos">Inscritos</button>
      </div>
      <ul v-if="showList">
        <li v-for="(dni, index) in dniList" :key="index">
          {{ dni }}
          <button @click="editDni(index)">Editar</button>
          <button @click="deleteDni(index)">Borrar</button>
        </li>
      </ul>
    </div>
  </template>
  
  
    
  <style scoped>
  .app {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
  }
  
  .buttons {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  
  button {
    margin: 5px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 10px;
  }
  </style>