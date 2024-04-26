<script setup>
import { ref, watch } from 'vue';
import { useCampStore } from '../../stores/campStore.js';
import SelectDate from './SelectDate.vue';

const props = defineProps({
  camp: Object,
  showModal: Boolean, 
});

const store = useCampStore();
const modalOpen = ref(props.showModal);
const camp = ref(props.camp);
const editCamp = ref({...props.camp }); 
const selectedImg = ref(null); 
const emit = defineEmits(['close']);

const handleEditAndClose = async () => {
  try {
    // Actualiza camp con los valores de editCamp
    camp.value = {...editCamp.value };
    console.log('Datos del campamento a editar:', camp.value);
    await store.editCamp(camp.value.id, camp.value);
    closeModal();   } catch (error) {
    console.error("Error al editar el campamento", error);
  }
};

const handleUpdateDates = ({ startDate, endDate }) => {
  editCamp.value.start_date = startDate;
  editCamp.value.end_date = endDate;
  console.log('Fechas actualizadas:', { startDate, endDate });
};

watch(
  () => store.campsList,
  (newCampsList) => {
    campsList.value = newCampsList;
  },
  { deep: true }
);

function convertImageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const handleImageChange = (event) => {
  selectedImg.value = event.target.files[0];
};

const closeModal = () => {
  modalOpen.value = false;
  emit('close');
};
</script>

<template>
	<b-modal v-model="modalOpen" title="Editar Campamento">
	  <img src="../../assets/img/11x12-horizontal.jpg" alt="imagen 11x12 horizontal" class="img-form">
	  <div class="form d-flex flex-column modal-camp" @submit.prevent="handleEdit">
		<label>Nombre Campamento:
		  <input type="text" class="form-control w-100 mb-3" aria-label="Sizing example input"
			aria-describedby="inputGroup-sizing-lg" v-model="camp.camp_name">
		</label>
		<SelectDate @update:dates="handleUpdateDates" />
		<label>Horario:
		  <input type="text" class="form-control w-100 mb-3" v-model="camp.schedule" aria-label="Sizing example input"
			aria-describedby="inputGroup-sizing-lg">
		</label>
		<label>
		  Descripción:
		  <textarea class="form-control w-100" v-model="camp.description" aria-label="Sizing example input"
			aria-describedby="inputGroup-sizing-xlg"></textarea>
		</label>
		<div class="d-flex justify-content-between mb-3">
		  <label>Tipo de Semana:
			<select class="form-select" v-model="camp.numdays" aria-label="Default select example">
			  <option value="1">Cantidad de días </option>
			  <option value="4">4 Días</option>
			  <option value="5">5 Días</option>
			</select>
		  </label>
		  <label>Precio:
			<input type="text" v-model="camp.price" class="form-control w-50"/>
		  </label>
		</div>
		<div class="input-group">
		  <input type="file" class="form-control" id="inputGroupFile04" @change="handleImageChange"
			aria-describedby="inputGroupFileAddon04" aria-label="Upload">
		</div>
		<div class="clearfix">
		  <div class="d-grid gap-2">
			<button class="btn btn-danger" type="button" @click="handleEditAndClose">Editar Campamento</button>
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
		width: 50%;
		z-index: 100!important;
	}
}
</style>