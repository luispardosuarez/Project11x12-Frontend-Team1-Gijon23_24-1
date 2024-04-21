import AddCampService from '@/components/services/AddCampService';
import { defineStore } from 'pinia';

export const useAddCampService= defineStore({
  id: 'price',
  state: () => ({
    prices: [],
    selectedPrice: null,
    // Otros estados y mutaciones relacionados con price
  }),
  actions: {
    async addPrice(campId, price) {
      try {
        const response = await AddCampService.addPrice(campId, price);
        // Manejar la respuesta si es necesario
      } catch (error) {
        console.error("Error al cargar el precio:", error);
      }
    },
    async updatePrice(campId, data) {
      try {
        const response = await AddCampService.updatePrice(campId, data);
        // Manejar la respuesta si es necesario
      } catch (error) {
        console.error("Error al actualizar el precio:", error);
      }
    },
    // Otras acciones relacionadas con price
  }
});