import axios from 'axios';

export default class CampService {
  uri = import.meta.env.VITE_API_ENDPOINT_CAMPS;

  async createCamp(data) {
    try {
      const response = await axios.post(`${this.uri}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error('Error al crear el campamento:', error);
    }
  }





  async getCamps() {
    try {
      const response = await axios.get(`${this.uri}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los campamentos:', error);
      throw error;
    }
  }



  async deleteCamp(campId) {
    try {
      await axios.delete(`${this.uri}/${campId}`);
      console.log('Campamento borrado exitosamente.');
    } catch (error) {
      console.error('Error al borrar el campamento:', error);
      throw error;
    }
  }

  async editCamp(camp) {
    try {
      const response = await axios.put(`${this.uri}/${camp.id}`, camp, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error('Error al editar el campamento:', error);
    }
  }
}
