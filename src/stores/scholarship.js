import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {

    const user = reactive({
        dni: ''
    })

    const isLoading = ref(false)

    const scholarship = async (dataConnection) => {

        const uri = import.meta.env.VITE_API_ENDPOINT_SCHOLARSHIP
    
        try {
            isLoading.value = true
            const options = {
                baseURL: uri,
                auth: dataConnection,
                withCredentials: true
            }
    
            const response = await axios.get(`${uri}`, options)
            const data = await response.data
            isLoading.value = false
            return data;
        } catch (error) {
            throw new Error('Error Loading API: ' + error)
        }
    }

    return { user, scholarship }
})
