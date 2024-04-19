
import { defineStore } from 'pinia';
import PriceService from '../components/services/PriceService';

export const usePriceStore = defineStore({
  id: 'price',
  state: () => ({
    prices: [],
    selectedPrice: null,
    // Otros estados y mutaciones relacionados con price
  }),
  actions: {
    async addPrice(campId, price) {
      try {
        const response = await PriceService.addPrice(campId, price);
        // Manejar la respuesta si es necesario
      } catch (error) {
        console.error("Error al cargar el precio:", error);
      }
    },
    async updatePrice(campId, data) {
      try {
        const response = await PriceService.updatePrice(campId, data);
        // Manejar la respuesta si es necesario
      } catch (error) {
        console.error("Error al actualizar el precio:", error);
      }
    },
    // Otras acciones relacionadas con price
  }
});