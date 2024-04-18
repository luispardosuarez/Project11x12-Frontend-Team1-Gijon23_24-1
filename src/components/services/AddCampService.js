import axios from "axios";

export default {
 uri: import.meta.env.VITE_API_ENDPOINT_CAMPS,
 uri2: import.meta.env.VITE_API_ENDPOINT_PRICES,
 uri3: import.meta.env.VITE_API_ENDPOINT_IMAGES,

 async createCamp(data) {
  console.log("Data being sent:", data);
    try {
      const response = await axios.post(`${this.uri}`,data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error("Error al crear el campamento:", error);
    }
 },

 async addPrice(campId, price) {
    try {
      const response = await axios.post(`${this.uri2}`,{campId,price}, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error al cargar el precio.");
      throw error;
    }
 },

//  async uploadImages(campId, formData) {
//     try {
//       await axios.post(`${this.uri3}/${campId}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       });
//       console.log("Imágenes subidas exitosamente.");
//     } catch (error) {
//       console.error("Error al subir las imágenes:", error);
//       throw error;
//     }
//  },

 async deleteCamp(campId) {
    try {
      await axios.delete(`${this.uri}/${campId}`);
      console.log("Campamento borrado exitosamente.");
    } catch (error) {
      console.error("Error al borrar el campamento:", error);
      throw error;
    }
 }
}