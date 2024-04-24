import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

    export const usescholarshipStore = defineStore('scholarship', () => {

        const dniList = ref([]); // Array d lista de DNI, almacenada como una referencia reactiva.
        const filterByDNI = ref(''); // Un filtro para buscar DNI específicos, también una referencia reactiva.


        const filteredDniList = computed(() => { //Una propiedad calculada que filtra dniList basándose en filterByDNI. 
            //Si filterByDNI está vacío, devuelve toda la lista; de lo contrario, filtra los DNI que incluyen el valor de filterByDNI.
            if (!filterByDNI.value) {
            return dniList.value;
            }
            return dniList.value.filter(dni => dni.dni.includes(filterByDNI.value));
        });
    

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
            dniList.value = data
            console.log(dniList.value)
            return data;
        } catch (error) {
            throw new Error('Error Loading API: ' + error)
        }
    }

    const deleteDNI = async (id) => {

        const uri = import.meta.env.VITE_API_ENDPOINT_SCHOLARSHIP
    
        isLoading.value = true
        const options = {
            baseURL: uri,
            withCredentials: true
        }
    
        try {
            const response = await axios.delete(`${uri}/${id}`, options)
            
            const status = response.status
    
            if (status == 200) { 
                await scholarship()
                return true
            }
        } catch (error) {
            console.error('Error Deleting dni:', error);
        }
        }


        const editDNI = async (id, newValue) => {
            const uri = import.meta.env.VITE_API_ENDPOINT_SCHOLARSHIP
        
            isLoading.value = true
            const options = {
                baseURL: uri,
                withCredentials: true,
                data: {
                    dni: newValue 
                }
            }
        
            try {
                const response = await axios.put(`${uri}/${id}`, options.data)
        
                const status = response.status
        
                if (status === 200) {
                    await scholarship()
                    return true
                }
            } catch (error) {
                console.error('Error Editing dni:', error);
            } finally {
                isLoading.value = false
            }
        }


    return { dniList, scholarship, deleteDNI, editDNI, filterByDNI, filteredDniList}
})