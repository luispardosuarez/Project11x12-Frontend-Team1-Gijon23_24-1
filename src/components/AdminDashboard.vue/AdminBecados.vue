<script setup>
import { ref, computed } from 'vue';

import axios from 'axios';

const becados = ref([]);
const mostrarLista = ref(false);
const paginaActual = ref(1);
const elementosPorPagina = 10;
const nuevoDni = ref('');

const fetchBecados = async () => {
  try {
    const response = await axios.get('VITE_API_ENDPOINT_SCHOLARSHIP');
    becados.value = response.data;
    mostrarLista.value = true;
  } catch (error) {
    console.error('Error fetching becados:', error);
  }
};

const editarBecado = async (index) => {
  try {
    const response = await axios.put(`VITE_API_ENDPOINT_EDITAR_BECADO/${index}`, becados.value[index]);
    console.log('Becado editado:', response.data);
  } catch (error) {
    console.error('Error editando becado:', error);
  }
};

const borrarBecado = async (index) => {
  try {
    await axios.delete(`VITE_API_ENDPOINT_BORRAR_BECADO/${index}`);
    becados.value.splice(index, 1);
    console.log('Becado borrado exitosamente');
  } catch (error) {
    console.error('Error borrando becado:', error);
  }
};
const totalPaginas = computed(() => Math.ceil(becados.value.length / elementosPorPagina));
const paginatedBecados = computed(() => {
  const inicio = (paginaActual.value - 1) * elementosPorPagina;
  const fin = paginaActual.value * elementosPorPagina;
  return becados.value.slice(inicio, fin);
});

const cambiarPagina = (pagina) => {
  paginaActual.value = pagina;
};
const añadirBecado = () => {
  if (nuevoDni.value) {
    becados.value.push({ dni: nuevoDni.value });
    nuevoDni.value = ''; 
  }
};
</script>

<template>

  <div>
    <h1 class="titulo">¡Hola Admin!</h1>

    <div class="botones-container">
    <v-btn class="boton becados-btn" color="#D0003E" @click="mostrarLista = !mostrarLista">Becados</v-btn>
    <v-btn class="boton" color="#D0003E" @click="mostrarCampamentos">Campamentos</v-btn>
    <v-btn class="boton" color="#D0003E" @click="mostrarInscritos">Inscritos</v-btn>
    </div>
    <img src="@/assets/img/11x12.jpg" alt="" class= "my-image" />

    <v-list v-if="mostrarLista" class="lista-dnis-container">
      <v-list-item v-for="(dni, index) in becados" :key="index">
        <v-list-item-content>
          <v-text-field v-model="dni.dni" outlined></v-text-field>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon @click="editarBecado(index)">mdi-pencil</v-icon>
          <v-icon @click="borrarBecado(index)">mdi-delete</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-pagination v-model="paginaActual" :length="totalPaginas" @click="cambiarPagina" />
    <div class="añadir-container">
      <p>Añadir Becado:</p>
      <div>
        <p>DNI Becado:</p>
        <v-text-field v-model="nuevoDni" outlined></v-text-field>
        <v-btn class="añadir-btn" @click="añadirBecado">Añadir Becado</v-btn>
      </div>
    </div>
  </div>

</template>

<style scoped>

.titulo {
  text-align:left;
  margin-top: 25px;
  font-size: 30px;
}

.botones-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 70px;
  
}
.boton {
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
  margin-left: 8px;
  margin-top: 20px;
}

.becados-btn {
  position: absolute;
  top: 155px;
  left: 2px;
}

.v-icon {
  cursor: pointer;
  margin-left: 10px;
}
.v-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.añadir-container {
  text-align: center;
  margin-top: 20px;
}

.añadir-btn {
  margin-top: 10px;
  padding: 10px 25px;
  background-color: #D0003E;
  font-size: 14px;
  color: #fff;
  border: none;
  cursor: pointer;
}
.lista-dnis-container {
  margin-top: 20px;
  text-align: center;
}


</style>