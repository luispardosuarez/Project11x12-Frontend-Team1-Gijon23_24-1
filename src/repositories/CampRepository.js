import axios from "axios"

export default class CampRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_CAMPS

    async getAllCamps() {

        try {
            const response = await axios.get(this.uri);
            
            return response.data;
            

        } catch (error) {
            throw new Error('Error al cargar los datos de la tabla camps')
        }
    }

    async getCampById(id) {
        try{
            const response = await axios.get(`${this.uri}/${id}`);
            return response.data;
        } catch(error){
            throw new Error('Error al cargar el campamento específico')
        }
    }
    
}