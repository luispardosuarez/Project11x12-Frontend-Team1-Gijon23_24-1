import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('auth', () => {
    const user = reactive({
        id: null,
        username: '',
        roles: '',
        isAuthenticated: false
    })
    const isLoading = ref(false)
    const isAuthenticated = computed(() => user.isAuthenticated)
    const id = computed(() =>user.id)
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
            const data = response.data
            user.isAuthenticated = true
            user.id = data.id
            user.username = data.username
            user.roles = data.roles
            isLoading.value = false
            console.log("ID del usuario:", user.id);
            return {success: true}
        } catch (error) {
            isLoading.value = false
            return {success: false, error: 'Error al autenticar: ' + error.message}
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
        user.id = null;
        user.username = '';
        user.roles = '';
        user.isAuthenticated = false;
    };
    return { user, login, logout, userLogout, isAuthenticated, isLoading, id  }
})