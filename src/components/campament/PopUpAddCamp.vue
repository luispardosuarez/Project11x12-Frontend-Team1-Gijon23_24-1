<script setup>
import { ref } from 'vue';
import AddCampService from '../services/AddCampService';
import SelectDate from './SelectDate.vue';
const modalOpen = ref(false);

const getSelectedDateRange = () => {

	return { start_date: new Date(), end_date: new Date() };
};
const resetForm = () => {
	camp_name.value = "";
	price.value
	start_date.value = "";
	end_date.value = "";
	schedule.value = "";
	description.value = "";
	img.value = "";
	numdays.value = "";
}
const campId = ref();

// Form data.
const camp_name = ref("");
const start_date = ref("");
const end_date = ref("");
const schedule = ref("");
const description = ref("");
const selectedImg = ref([]);
const numdays = ref("");

// Handle MAIN IMAGE upload.
const img = (event) => {
	selectedImg.value = event.target.files[0];
};


async function handlePost() {
	try {
		await createCamp();
		await uploadImages(productId.value);

		console.log("Proceso completado exitosamente.");
	} catch (error) {
		console.error("Error al crear el producto", error);

		deleteCamp(campId);
	}
}

async function createCamp() {
	const data = {
		camp_name: camp_name.value,
		price: price.value,
		categoryId: categoryId.value,
		productDescription: productDescription.value,
		start_date: start_date.value,
		end_date: end_date.value,
		schedule: schedule.value,
		description: description.value,
		selectedImg: img.value,
		numdays: numdays.value,


	}



console.log(data);const submitForm = async () => {
 const data = prepareData(); // Prepare your data

 try {
    const response = await AddCampService.createCamp(data); // Use the service method
    productId.value = response.id; // Assuming the response contains the ID directly
    console.log(productId);
 } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
 }
};

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
			<SelectDate />
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
						<option value="2">4 Días</option>
						<option value="3">5 Días</option>
					</select>
				</label>
				<label>Precio:
					<input type="text" v-model="price" class="form-control w-50" />
				</label>
			</div>
			<div class="input-group">
				<input type="file" class="form-control" id="inputGroupFile04" @change="img"
					aria-describedby="inputGroupFileAddon04" aria-label="Upload">
			</div>
			<div class=" clearfix">
				<div class="d-grid gap-2">
					<button class="btn btn-danger" type="button" @click="submitForm"> Añadir Campamento</button>
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