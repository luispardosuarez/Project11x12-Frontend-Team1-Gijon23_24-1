
import axios from 'axios';


export default class PricesService {
  uri= import.meta.env.VITE_API_ENDPOINT_PRICES;
  async addPrice(campId, price) {
    try {
      const response = await axios.post('/api/prices', { campId, price }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error al cargar el precio:", error);
      throw error;
    }
  }

  async updatePrice(campId, data) {
    try {
      const response = await axios.put(`/api/prices/${campId}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error al actualizar el precio:", error);
      throw error;
    }
  }
};