<script setup>

import { ref, computed } from 'vue';
import { usescholarshipStore } from "@/stores/scholarship";
import { watchEffect } from 'vue';

const store = usescholarshipStore();
const searchQuery = ref('');


const showResults = computed(() => filteredDniList.value.length > 0);


const filteredDniList = computed(() => { 
    const dniList = store.dniList || [];
    const dniListFiltered = dniList.filter(dni => dni.dni.includes(searchQuery.value));
    return dniListFiltered
});


const noResultsFound = computed(() => !showResults.value);

watchEffect(() => {
    store.setSearchQuery(searchQuery.value);

    console.log(store.dniList);
    console.log(filteredDniList.value);
});

const updateSearchQuery = (event) => {
    store.setSearchQuery(event.target.value);
}; 


</script>

<template>

    <div class="contain">
        <div class="center">
            <div class="temp_box">
                <!-- <input type="text" id="dni_pas" placeholder="Buscar DNI" v-model="searchQuery" autocomplete="off" @keyup.enter="searchQuery.value = ''"> -->
                <input type="text" placeholder="Buscar DNI" @input="updateSearchQuery" autocomplete="off"/>
                <label>🔍</label> 
            </div>
            
            
            <table class="table table-striped table-bordered" v-if="showResults"> 
    <tbody>
        <tr v-for="dni in filteredDniList" :key="dni.id"></tr>
    </tbody>
</table>

<div v-if="noResultsFound" class="error-message">
    DNI no encontrado.
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