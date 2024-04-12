<script setup>

import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { usescholarshipStore } from "@/stores/scholarship";

const uri = import.meta.env.VITE_API_ENDPOINT_SCHOLARSHIP


const route = useRoute()
const router = useRouter()
const store = usescholarshipStore()


const dniList = ref([])

async function scholarship () {

    dniList.value = await store.scholarship()
    console.log(dniList.value);
}

scholarship()




</script>

<template>
    <div class="table_becados">
        <h4>Becados</h4>
        <table>

            <tr v-for="dni in dniList" :key="dni">
                <td> {{ dni.dni }}</td>
                <td>
                    <img src="../assets/icons/see.svg" alt=""> 
                    <img src="../assets/icons/edit.svg" alt="">
                    <img src="../assets/icons/delete.svg" alt="">
                </td>
            </tr>
        
        </table>

    </div>
</template>

<style scoped lang="scss">
.table_becados {
    height: 75vh;
    background-color: $gray-form;
    padding: 2% 2%;

    h4 {
        font-weight: 650;
    }

    table {
        border: none;
        height: 90%;
        display: flex;
        flex-direction: column;
        font-size: 0.8em;
        gap: 6px;

        tr{
            height:5vh;

            td {
                padding: 0.3em;
                width: 1%;
                border: 1px solid $red;
                background-color: white;
        //         text-align: right;
            }

            img {
                width: 30px;
                padding-left: 3px;
            }
        }
    }
}
</style>