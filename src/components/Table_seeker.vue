<script setup>

import { ref, computed } from 'vue';
import { usescholarshipStore } from "@/stores/scholarship";
import { watchEffect } from 'vue';

const store = usescholarshipStore();
const searchQuery = ref('');

const showResults = computed(() => searchQuery.value.length > 0);


const filteredDniList = computed(() => { 
    const dniList = store.dniList || [];
    const dniListFiltered = dniList.filter(dni => dni.dni.includes(searchQuery.value));
    return dniListFiltered
});

const noResultsFound = computed(() => filteredDniList.value.length === 0);

const editScholarship = async (id, newValue) => {
    await store.editDNI(id, newValue);
    const index = store.dniList.value.findIndex(dni => dni.id === id);
    if (index !== -1) {
        store.dniList.value[index].dni = newValue;
    }
    searchQuery.value = '';
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
    const isDeleted = await store.deleteDNI(id);
    if (isDeleted) {
        store.deleteDNI(id);
    } else {
        console.error('No se pudo borrar el registro');
    }
}


watchEffect(() => {

    console.log(store.dniList);
    console.log(filteredDniList.value);
});


</script>

<template>

    <div class="contain">
        <div class="center">
            <div class="temp_box">
                <input type="text" id="dni_pas" placeholder="Buscar DNI" v-model="searchQuery" autocomplete="off" @keyup.enter="searchQuery.value = ''">
                <label>🔍</label> 
            </div>

            <table class="table table-striped table-bordered" v-if="showResults">
                
                <tbody>
                    <tr v-for="dni in filteredDniList" :key="dni.id">
                        
                    <td>
                            <span v-if="!dni.isEditing">{{ dni.dni }}</span>  
                    <input v-else :value="dni.dni" @keyup.enter="updateDNI(dni, $event.target.value)" @blur="editScholarship(dni.id, dni.dni)" />
                        </td> 

                    <img src="../assets/icons/delete.svg" alt=""  @click="deleteScholarship(dni.id)">
                    <img src="../assets/icons/edit.svg" alt="" @click="toggleEditMode(dni)">

                    </tr>
                </tbody>
            </table>

            <div v-if="noResultsFound" class="error-message">
                No hay resultados.
            </div>

        </div>
    </div>

</template>

<style scoped lang="scss">
.contain {
    .center {
        display: grid;

        .temp_box {
            display: flex;
            align-items: center;
            position: relative;
        }

        .temp_box label{
            position: absolute;
            left: 200px;
            filter: grayscale(1);
        }

        input {
            width: 230px;
            padding: 5px 5px;
            outline: none;
            border: none;
            color: $black;
            border: .6px $red solid;
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

</style>