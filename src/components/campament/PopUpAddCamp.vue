<script setup>
import { ref } from 'vue';
import { useImageStore } from '../../stores/imageStore';
import AddCampService from '../services/AddCampService';
import SelectDate from './SelectDate.vue';

// Pinia store for images
const imageStore = useImageStore();

// Método para actualizar las fechas de inicio y fin
const updateDates = ({ startDate, endDate }) => {
  console.log("Recibiendo fechas:", { startDate, endDate });
  start_date.value = startDate;
  end_date.value = endDate;
};

const modalOpen = ref(false);
const campId = ref();

// Form data.
const camp_name = ref("");
const start_date = ref("");
const end_date = ref("");
const schedule = ref("");
const description = ref("");
const selectedImg = ref(null); // Cambiado a null para manejar la imagen
const numdays = ref("");
const price = ref("");

// Función para convertir la imagen a Base64
function convertImageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Método para manejar la selección de la imagen
const handleImageChange = (event) => {
  selectedImg.value = event.target.files[0];
};

async function handlePost() {
  try {
    // Create a FormData object for the camp data (excluding image)
    const campData = {
      camp_name: camp_name.value,
      price: price.value,
      start_date: start_date.value,
      end_date: end_date.value,
      schedule: schedule.value,
      description: description.value,
      numdays: numdays.value,
    };

    // Call the createCamp method with the camp data
    const campResponse = await AddCampService.createCamp(campData);
    campId.value = campResponse.id; // Assuming the response contains an id for the newly created camp

    // Convert the image to Base64 and store it in Pinia
    if (selectedImg.value) {
      const base64Image = await convertImageToBase64(selectedImg.value);
      imageStore.addImage(base64Image, campId.value); // Associate image with camp ID
    }

    console.log("Proceso completado exitosamente.");
    resetForm();
  } catch (error) {
    console.error("Error al crear el campamento ", error);
  }
}

function resetForm() {
  camp_name.value = "";
  start_date.value = "";
  end_date.value = "";
  schedule.value = "";
  description.value = "";
  selectedImg.value = null;
  numdays.value = "";
  price.value = "";
}

const closeModal = () => {
  modalOpen.value = false;
  emit("close");
};
</script>
<template>

	<b-modal v-model="modalOpen" title="Formulario">
  
	  <img src="../../assets/img/11x12-horizontal.jpg" alt="imagen 11x12 horizontal" class=" img-form mb-5">
	  <div class="form d-flex flex-column modal-camp" @submit.prevent="submitForm">
		<label>Nombre Campamento:
		  <input type="text" class="form-control w-100 mb-3" aria-label="Sizing example input"
			aria-describedby="inputGroup-sizing-lg" v-model="camp_name">
		</label>
		<SelectDate @update:dates="updateDates" />
		<label>Horario:
		  <input type="text" class="form-control w-100 mb-3" v-model="schedule" aria-label="Sizing example input"
			aria-describedby="inputGroup-sizing-lg">
		</label>
		<label>
		  Descripción:
		  <textarea class="form-control w-100" v-model="description" aria-label="Sizing example input"
			aria-describedby="inputGroup-sizing-xlg"></textarea>
		</label>
		<div class="d-flex justify-content-between mb-3">
		  <label>Tipo de Semana:
			<select class="form-select" v-model="numdays" aria-label="Default select example">
			  <option value="1">Cantidad de días </option>
			  <option value="4">4 Días</option>
			  <option value="5">5 Días</option>
			</select>
		  </label>
		  <label>Precio:
			<input type="text" v-model="price" class="form-control w-50" />
		  </label>
		</div>
		<div class="input-group">
		  <input type="file" class="form-control" id="inputGroupFile04" @change="handleImageChange"
			aria-describedby="inputGroupFileAddon04" aria-label="Upload">
		</div>
		<div class=" clearfix">
		  <div class="d-grid gap-2">
			<button class="btn btn-danger" type="button" @click="handlePost"> Añadir Campamento</button>
		  </div>
		</div>
	  </div>
	</b-modal>
  
  </template>

<style scoped lang="scss">
.img-form {
	width: 100%;
}

.modal-camp {
	padding: 2rem;
	background-color: $gray-form;
	font-family: Arial, Helvetica, sans-serif;

	.form {
		height: 100%;
		width: 100%;


	}
}
</style>