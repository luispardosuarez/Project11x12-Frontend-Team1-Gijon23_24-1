<script setup>

import { ref, computed } from "vue"
import { useRoute, useRouter } from "vue-router";
import { usescholarshipStore } from "@/stores/scholarship";

const uri = import.meta.env.VITE_API_ENDPOINT_SCHOLARSHIP


const route = useRoute()
const router = useRouter()
const store = usescholarshipStore()

const dniList = computed(() => store.dniList)


const filteredDniList = computed(() => {
    const dniList = store.dniList || [];
    const searchQuery = store.searchQuery;
    return dniList.filter(dni => dni.dni.includes(searchQuery));
});



async function scholarship () {
    dniList.value = await store.scholarship()
    dniList.value = dniList.value.map(dni => ({ ...dni, isEditing: false }))
}

const editScholarship = async (id, newValue) => {
    await store.editDNI(id, newValue)
    await scholarship()
}

const updateDNI = (dni, newValue) => {  
    dni.dni = newValue
}

const toggleEditMode = (dni,id) => {
    dni.isEditing = !dni.isEditing;
}


const deleteScholarship = async (id) => {

    const confirmation = window.confirm('¿Estás seguro de querer borrar este DNI?');
    if (!confirmation) {
        return;
    }

    const isDeleted = await store.deleteDNI(id)

    if (isDeleted) {
        dniList.value = dniList.value.filter(item => item.id !== id)
    } else {
        console.error('No se pudo borrar el registro');
    }
}

scholarship()


const itemsPerPage = ref(8); 
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(dniList.value.length / itemsPerPage.value));

const nextPage = () => {
 if (currentPage.value < totalPages.value) {
    currentPage.value++;
 }
};

const prevPage = () => {
 if (currentPage.value > 1) {
    currentPage.value--;
 }
};

const goToPage = (page) => {
 if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
 }
};

const paginatedDnis = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredDniList.value.slice(start, end);
});



</script>

<template>
    <div class="table_becados">
        <h4>Becados</h4>
        <table>

            <tr v-for="dni in filteredDniList " :key="dni.dni">
                <td> 
                    <span v-if="!dni.isEditing">{{ dni.dni }}</span>  
                    <input v-else :value="dni.dni" @keyup.enter="updateDNI(dni, $event.target.value)" @blur="editScholarship(dni.id, dni.dni)" />
            

                    <img src="../../assets/icons/delete.svg" alt=""  @click="deleteScholarship(dni.id)">
                        <img src="../../assets/icons/edit.svg" alt="" @click="toggleEditMode(dni)">

                </td>

            </tr>
            <nav aria-label="Page navigation example" >
                <ul class="pagination" >
                    <li class="page-item" @click="prevPage" >
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
        <li class="page-item" v-for="page in totalPages" :key="page" @click="goToPage(page)">
        <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li class="page-item" @click="nextPage">
        <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
        </li>
                </ul>
            </nav>

        </table>
    </div>
</template>


<style scoped lang="scss">

.table_becados {

    height: auto;
    background-color: $gray-form;
    padding: 2% 2%;

    h4 {
        font-weight: 650;
        font-family: Arial, Helvetica, sans-serif;
    }

    table {
        border: none;
        height: 90%;
        display: flex;
        flex-direction: column;
        font-size: 0.8em;
        gap: 15px;

        tr{
            height:5vh;
            

            td {
                
                width: 1%;
                border: 1px solid $red;
                background-color: white;
                padding: 5px;
            }

            img {
                width: 30px;
                padding-left: 3px;
                float: right;
                display: flex;
                margin-right: 1.5%;
            }

        

        }
    }
    .pagination {
 display: flex;
 /* padding-left: 0; */
/*  margin: 20px 0; */
 border-radius: 4px;
 padding-top: 15px;
justify-content: center!important;
}
.pagination > li {
 display: inline-flex;
}
.pagination > li > a,
.pagination > li > span {
 position: relative;
/*  float: left; */
 padding: 6px 12px;
 /* margin-left: -1px; */
 line-height: 1.42857143;
 color: #252525;
 text-decoration: none;
 background-color: #fff;
 border: 1px solid #ddd;
}
.pagination > li.active > a,
.pagination > li.active > span {
 background-color: red;
 border-color: red;
 color: #fff;
}
}
</style>
