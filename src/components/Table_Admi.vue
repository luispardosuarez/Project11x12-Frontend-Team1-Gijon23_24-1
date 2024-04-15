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

const deleteScholarship = async (dni) => {
    const isDeleted = await store.deleteDNI(dni)

    if (isDeleted) {

        dniList.value = dniList.value.filter(item => item.dni !== dni)
    } else {

        console.error('No se pudo borrar el registro');
    }
}

scholarship()


</script>

<template>
    <div class="table_becados">
        <h4>Becados</h4>
        <table>

            <tr v-for="dni in dniList" :key="dni.dni">
                <td> {{ dni.dni }}
            

                    <img src="../assets/icons/delete.svg" alt=""  @click="deleteScholarship(dni.id)">
                        <img src="../assets/icons/edit.svg" alt="">

                </td>

            </tr>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
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