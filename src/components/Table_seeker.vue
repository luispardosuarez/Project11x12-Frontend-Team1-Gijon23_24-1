<script setup>

import { ref, computed } from 'vue';
import { usescholarshipStore } from "@/stores/scholarship";
import { watchEffect } from 'vue';

const store = usescholarshipStore();
const searchQuery = ref('');

const filteredDniList = computed(() => {
    watchEffect(() => {
 console.log(filteredDniList.value);
});
    const dniList = store.dniList.value || [];
    return dniList.filter(dni => String(dni).includes(searchQuery.value));

  
});


</script>

<template>

    <div class="contain">
        <div class="center">
            <div class="temp_box">
                <input type="text" id="dni_pas" placeholder="Buscar DNI" v-model="searchQuery">
                <label>🔍</label> 
            </div>

            <ul>
        <li v-for="dni in filteredDniList" :key="dni">{{ dni }}</li>
        </ul>
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
    }
}
</style>