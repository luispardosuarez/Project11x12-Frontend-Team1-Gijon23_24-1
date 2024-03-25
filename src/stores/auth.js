import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {

    const user = reactive({
        username: '',
        roles: '',
        isAuthenticated: false
    })

    const isLoading = ref(false)

    const login = async (dataConnection) => {

        const uri = import.meta.env.VITE_APP_API_ENDPOINT

        try {
            isLoading.value = true
            const options = {
                baseURL: uri,
                auth: dataConnection,
                withCredentials: true
            }

            const response = await axios.get('/login', options)
            const data = await response.data
            user.isAuthenticated = true
            user.username = data.username
            user.roles = data.roles
            isLoading.value = false
            return true
        } catch (error) {
            throw new Error('Error Loading API: ' + error)
        }


    }

    return { user, login }
})