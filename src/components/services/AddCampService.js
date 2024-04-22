import axios from "axios";

export default {
 uri: import.meta.env.VITE_API_ENDPOINT_CAMPS,
 uri2: import.meta.env.VITE_API_ENDPOINT_IMAGES,



//CRUD para Campamentos
//CREATED
async createCamp(campData) {
  try {
      const response = await axios.post(`${this.uri}`, campData, {
          headers: {
              "Content-Type": "application/json",
          },
          withCredentials: true,
      });
      return response.data;
  } catch (error) {
      console.error("Error al crear el campamento:", error);
      throw error;
  }
},
 //READ
async getCamp(data)  {
  console.log("Data being sent:", data);
  try {
     const response = await axios.get(`${this.uri}`);
     return response.data;
  } catch (error) {
     console.error("Error al obtener el campamento:", error);
     throw error;
  }
 },
 //READ BY ID
  async getCampId(data)  {
  console.log("Data being sent:", data);
  try {
     const response = await axios.get(`${this.uri}/${campId}`);
     return response.data;
  } catch (error) {
     console.error("Error al obtener el campamento:", error);
     throw error;
  }
 },
//UPDATE BY ID
async editCamp(campId, camp) {
  try {
     const data = {
       camp_name: camp.camp_name,
       start_date: camp.start_date,
       end_date: camp.end_date,
       schedule: camp.schedule,
       description: camp.description,
       numdays: camp.numdays,
       price: camp.price,
     };
     const response = await axios.put(`${this.uri}/${campId}`, data, {
       headers: {
         "Content-Type": "application/json",
       },
       withCredentials: true,
     });
     return response.data;
  } catch (error) {
     console.error("Error al editar el campamento:", error);
     throw error;
  }
 },
 //DELETE BY ID
 async deleteCamp(id) {
    try {
      await axios.delete(`${this.uri}/${id}`);
      console.log("Campamento borrado exitosamente.");
    } catch (error) {
      console.error("Error al borrar el campamento:", error);
      throw error;
    }
 },

//CRUD IMAGES

 //CREATED
// async createImage(formData) {
//   try {
//      const response = await axios.post(`${this.uri2}`, formData, {
//        headers: {
//          "Content-Type": "multipart/form-data",
//        },
//        withCredentials: true,
//      });
//      return response.data;
//   } catch (error) {
//      console.error("Error al crear la imagen:", error);
//      throw error;
//   }
//  },
 
//READ BY ID
async getImage(imageId) {
  try {
     const response = await axios.get(`${this.uri2}/${imageId}`);
     return response.data;
  } catch (error) {
     console.error("Error al obtener la imagen:", error);
     throw error;
  }
 },
 
//  //UPLOAD BY ID
//  async updateImage(imageId, formData) {
//   try {
//      const response = await axios.put(`${this.uri2}/${imageId}`, formData, {
//        headers: {
//          "Content-Type": "multipart/form-data",
//        },
//        withCredentials: true,
//      });
//      return response.data;
//   } catch (error) {
//      console.error("Error al actualizar la imagen:", error);
//      throw error;
//   }
//  },
//  //DELETE BY ID
//  async deleteImage(imageId) {
//   try {
//      await axios.delete(`${this.uri2}/${imageId}`);
//      console.log("Imagen borrada exitosamente.");
//   } catch (error) {
//      console.error("Error al borrar la imagen:", error);
//      throw error;
//   }
//  },
}