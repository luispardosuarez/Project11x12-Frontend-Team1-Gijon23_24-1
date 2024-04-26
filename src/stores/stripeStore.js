import axios from "axios";
import { defineStore } from 'pinia';

export const useStripeStore = defineStore({
  id: 'stripeStore',
  state: () => ({
    uri: import.meta.env.VITE_API_ENDPOINT_INTENT_PAYMENT
   
  }),
  actions: {
    async post(paymentRequest) {
      const config = {
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      };

      try {
        const response = await axios.post(`${this.uri}`, paymentRequest, config);
        console.log(response.data)
        return response.data;
      } catch (error) {
        throw new Error(`Error with API calling: ${error}`);
      }
    }
  }
});