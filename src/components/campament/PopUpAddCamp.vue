<script setup>
import { ref } from 'vue';
import AddCampService from '../services/AddCampService';
import SelectDate from './SelectDate.vue';

const modalOpen = ref(false);

const getSelectedDateRange = () => {
 // Logic to get the selected date range
 return { start_date: new Date(), end_date: new Date() };
};

const submitForm = async () => {
 const camp_name = document.querySelector('input[name="camp_name"]').value;
 const { start_date, end_date } = getSelectedDateRange();
 const schedule = document.querySelector('input[name="schedule"]').value;
 const description = document.querySelector('textarea[name="description"]').value;
 const img = document.querySelector('input[type="file"]').files[0];
 const numdays = document.querySelector('select[name="numdays"]').value;

 const formData = new FormData();
 formData.append('camp_name', camp_name);
 formData.append('start_date', start_date);
 formData.append('end_date', end_date);
 formData.append('schedule', schedule);
 formData.append('description', description);
 formData.append('img', img);
 formData.append('numdays', numdays);

 try {
    const response = await AddCampService.addCamp(formData);
    console.log(response);
    modalOpen.value = false; // Close the modal
 } catch (error) {
    console.error(error);
 }
};

const closeModal = () => {
 modalOpen.value = false;
 emit("close");
};
</script>
<template>

  <b-modal v-model="modalOpen" title="Formulario" >

    <img src="../../assets/img/11x12-horizontal.jpg" alt="imagen 11x12 horizontal" class=" img-form mb-5">
    <div class="form d-flex flex-column modal-camp">
      <label>Nombre Campamento:
        <input type="text" class="form-control w-100 mb-3" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg">
      </label>
      <SelectDate />
      <label>Horario:
        <input type="text" class="form-control w-100 mb-3" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg">
      </label>
      <label>
        Descripción:
        <textarea class="form-control w-100" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-xlg"></textarea>
      </label>
      <div class="d-flex justify-content-between mb-3">
        <label>Tipo de Semana:
          <select class="form-select" aria-label="Default select example">
            <option value="1">Cantidad de días    </option>
            <option value="2">4 Días</option>
            <option value="3">5 Días</option>
          </select>
        </label>
        <label>Precio:
          <input type="text" class="form-control w-50" />
        </label>
      </div>
      <div class="input-group">
        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
          aria-label="Upload">
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
.img-form{
  width: 100%;
}
.modal-camp {
  padding: 2rem;
  background-color:$gray-form;
font-family: Arial, Helvetica, sans-serif;
  .form {
    height: 100%;
    width: 100%;
    
 
  }
}
</style>
<!-- 
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const props = defineProps({
	onClose: Function,
});

const closeForm = () => {
	props.onClose();
};

const resetForm = () => {
	productName.value = "";
	price.value = "";
	categoryId.value = "";
	productDescription.value = "";
	selectedFiles.value = [];
};

const productId = ref();

// Form data.
const productName = ref("");
const price = ref("");
const categoryId = ref("");
const productDescription = ref("");
const selectedFiles = ref([]);
const selectedMainImage = ref();

// Handle FILES upload.
const handleFilesChange = (event) => {
	selectedFiles.value = Array.from(event.target.files);
};

// Handle MAIN IMAGE upload.
const handleMainImageChange = (event) => {
	selectedMainImage.value = event.target.files[0];
};

async function handlePost() {
	try {
		await createProduct();
		await uploadImages(productId.value);

		console.log("Proceso completado exitosamente.");
	} catch (error) {
		console.error("Error al crear el producto", error);

		deleteProduct(productId);
	}
}

async function createProduct() {
	const data = {
		productName: productName.value,
		price: price.value,
		categoryId: categoryId.value,
		productDescription: productDescription.value,
	};
	console.log(data);
	try {
		const response = await axios.post(
			"http://localhost:8080/api/v1/products",
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
		productId.value = response.data.id;
		console.log(productId);
	} catch (error) {
		console.error("Error al crear el producto:", error);
		throw error;
	}
}

async function uploadImages(productId) {
	let formData = new FormData();
	selectedFiles.value.forEach((file) => {
		formData.append("files", file);
	});
	formData.append("file", selectedMainImage.value);
	try {
		await axios.post(
			`http://localhost:8080/api/v1/images/uploadImages/${productId}`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
				withCredentials: true,
			}
		);

		console.log("Imágenes subidas exitosamente.");
	} catch (error) {
		console.error("Error al subir las imágenes:", error);

		await deleteProduct(productId);

		throw error;
	}
}

async function deleteProduct(productId) {
	try {
		await axios.delete(
			`http://localhost:8080/api/v1/products/${productId}`
		);

		console.log("Producto borrado exitosamente.");
	} catch (error) {
		console.error("Error al borrar el producto:", error);

		throw error;
	}
}
</script>

<template>
	<div class="modal" @click="closeForm">
		<div class="modal_container" @click.stop>
			<div id="button_container">
				<button @click.stop="closeForm">
					<img src="/icons/icon-cross.svg" alt="cross icon" />
				</button>
			</div>

			<form @submit.prevent="submitForm">
				<h1>Añadir nuevo producto</h1>
				<div class="divMain">
					<div class="image-main">
						<label>Imagen Principal</label>
						<input
							type="file"
							class="form-control-file"
							id="file"
							name="file"
							@change="handleMainImageChange"
						/>
					</div>
					<section>
						<div class="first-row">
							<div class="title-container">
								<label>Título</label>
								<input
									type="text"
									class="form-control"
									id="title"
									v-model="productName"
									placeholder="Título"
								/>
							</div>

							<div class="price-container">
								<label>Precio</label>
								<input
									type="number"
									class="form-control"
									id="price"
									v-model="price"
									placeholder="Precio"
								/>
							</div>
						</div>

						<div class="categories-container">
							<label>Categoría</label>
							<select
								id="categories"
								v-model="categoryId"
								placeholder="Seleccione categoría"
							>
								<option value="1">Hogar</option>
								<option value="2">Geek</option>
								<option value="3">Litofanía</option>
							</select>
						</div>
					</section>
				</div>

				<div class="images-container">
					<label for="file-upload" class="custom-file-upload"
						>Imágenes</label
					>
					<input
						type="file"
						class="form-control-file"
						id="file-upload"
						name="files"
						multiple
						@change="handleFilesChange"
					/>
				</div>

				<div class="description-container">
					<label>Descripción</label>
					<textarea
						class="form-control"
						id="description"
						rows="3"
						v-model="productDescription"
						placeholder="Descripción..."
					></textarea>
				</div>

				<div class="btns-actions">
					<button id="reset" @click="resetForm()">Borrar</button>
					<button id="send" @click="handlePost()">Enviar</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.modal {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
}

.modal_container {
	height: 60rem;
	width: 60rem;
	background-color: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
	border-color: #ae81d1;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

#button_container {
	width: 100%;
	display: flex;
	padding: 3rem;
	justify-content: end;
}

form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	max-width: 600px;
	margin: 0 auto;
	padding: 0 2rem 0 2rem;
	border-radius: 1rem;
}

.divMain {
	display: flex;
	justify-content: space-between;
	gap: 1rem;
}

.image-main {
	width: 30%;

	input {
		//border: 1px solid black;
		width: 100%;
		height: 8.7rem;
		border-radius: 0.5rem;
		background-color: #ddd8d8;
		font-family: "Poppins", sans-serif;
	}
}
section {
	width: 100%;
}

.first-row {
	display: flex;
	gap: 2rem;
	width: 100%;
	margin-bottom: 1rem;
}

.title-container {
	width: 70%;

	input {
		width: 100%;
		height: 3rem;
		border-radius: 0.5rem;
		background-color: #ddd8d8;
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
	}
}

.price-container {
	width: 30%;

	input {
		width: 100%;
		height: 3rem;
		border-radius: 0.5rem;
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		background-color: #ddd8d8;
	}
}

.categories-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 1rem;
}

select {
	width: 100%;
	height: 3rem;
	border-radius: 0.5rem;
	//border: 1px solid black;
	background-color: #ddd8d8;
	font-family: "Poppins", sans-serif;
}

.images-container {
	margin-bottom: 1rem;

	input {
		border: 1px solid black;
		width: 100%;
		height: 5rem;
		//border-radius: 0.5rem;
		background-color: #ddd8d8;
		font-family: "Poppins", sans-serif;
	}
}

.description-container {
	width: 100%;
	height: 15rem;

	textarea {
		width: 100%;
		height: 12rem;
		border-radius: 0.5rem;
		//border: 1px solid black;
		background-color: #ddd8d8;
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
	}
}

h1 {
	font-family: "Poppins", sans-serif;
	font-size: 4rem;
	color: grey;
	margin-bottom: 5rem;
	display: flex;
	justify-content: center;
}

label {
	font-family: "Poppins", sans-serif;
	font-size: 1.5rem;
	margin-bottom: 1rem;
}

.btns-actions {
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin-top: 1rem;

	button {
		background-color: #ae81d1;
		font-family: "Poppins", sans-serif;
		font-size: 1.5rem;
		color: white;
		border-radius: 0.5rem;

		width: 8rem;
		height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
.form-control {
	padding: 1rem;
}
</style> -->