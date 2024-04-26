import { ref, reactive, watch } from 'vue'
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
        const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL
        try {
            isLoading.value = true
            const options = {
                baseURL: uri,
                auth: dataConnection,
                withCredentials: true
            }
            const response = await axios.get(`${uri}/login`, options)
            const data = await response.data
            user.isAuthenticated = true
            user.username = data.username
            user.roles = data.roles
            isLoading.value = false
            localStorage.setItem('user', JSON.stringify(user));
            return true
        } catch (error) {

            if (error.response && error.response.status === 401) {
                throw new Error('Contraseña incorrecta')
            }
            
            throw new Error('Error Loading API: ' + error)
        }
    }

    const logout = async () => {
        try {
            const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;
            await axios.post(`${uri}/logout`, {}, {
                withCredentials: true, 
            });
            userLogout(); 
            router.push({ path: '/' }); 
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const userLogout = () => {
        user.username = '';
        user.roles = '';
        user.isAuthenticated = false;

    };

    return { user, login, logout, userLogout }
})
