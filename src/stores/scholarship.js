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

const deleteScholarship = async (id) => {
    const isDeleted = await store.deleteDNI(id)

    if (isDeleted) {

        dniList.value = dniList.value.filter(item => item.id !== id)
    } else {

        console.error('No se pudo borrar el registro');
    }
}

scholarship()


</script>
