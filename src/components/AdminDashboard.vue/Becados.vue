<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Pagination from '@/components/Pagination.vue';

const showListaBecados = ref(false);
const listaBecados = ref(['12345678', '87654321', '98765432']);
const totalPages = ref(10);
const nuevoDni = ref('');

function showBecados() {
  showListaBecados.value = true;
}

function showCampamentos() {
  // Lógica para mostrar los campamentos
}

function showInscritos() {
  // Lógica para mostrar los inscritos
}

function añadirBecado() {
  listaBecados.value.push(nuevoDni.value);
  nuevoDni.value = '';
}

</script>

<template>

<div class="dashboard">
    <!-- Header -->
    <Header />

    <!-- Body -->
    <div class="body">
      <div class="left-panel">
        <button @click="showBecados">Becados</button>
        <button @click="showCampamentos">Campamentos</button>
        <button @click="showInscritos">Inscritos</button>
        <img src="logo.png" alt="Logo">
      </div>
      <div class="right-panel">
        <ul v-if="showListaBecados">
          <li v-for="dni in listaBecados" :key="dni">
            {{ dni }}
            <button class="editar">Editar</button>
            <button class="borrar">Borrar</button>
          </li>
        </ul>
        <Pagination :totalPages="totalPages" />

        <div class="añadir-becados">
          Añadir becados
          <div class="input-dni">
            <label for="dni">DNI Becado:</label>
            <input type="text" id="dni" v-model="nuevoDni">
            <button @click="añadirBecado">Añadir Becado</button>
          </div>
        </div>
      </div>
    </div>
  </div> 


</template>


<style scoped>

/* Estilos para la vista */
.dashboard {
  /* Estilos del dashboard */
}

.body {
  display: flex;
  /* Estilos del cuerpo del dashboard */
}

.left-panel {
  /* Estilos del panel izquierdo */
}

.right-panel {
  /* Estilos del panel derecho */
}

.input-dni {
  /* Estilos para el input de DNI y el botón de añadir */
}

/* Otros estilos necesarios */

button {
  background-color: red; /* Color de fondo rojo */
  color: white; /* Color del texto blanco */
  border: none; /* Quitamos el borde */
  border-radius: 5px; /* Bordes redondeados */
  padding: 10px 20px; /* Espaciado interno */
  margin-bottom: 10px; /* Espaciado inferior */
  cursor: pointer; /* Cursor de tipo mano */
}

/* Estilos para los botones de editar y borrar */
button.editar,
button.borrar {
  background-color: transparent; /* Fondo transparente */
  color: red; /* Color del texto rojo */
  border: 1px solid red; /* Borde sólido rojo */
}


</style>