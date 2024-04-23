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
            throw new Error('Error Loading API: ' + error)
        }

    }

    const loadUserFromLocalStorage = () => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            user.isAuthenticated = parsedUser.isAuthenticated;
            user.username = parsedUser.username;
            user.roles = parsedUser.roles;
        }
    }

    watch(user, (newUser, oldUser) => {
        localStorage.setItem('user', JSON.stringify(newUser));
    }, { deep: true });

    

    loadUserFromLocalStorage();


    return { user, login, loadUserFromLocalStorage }
})