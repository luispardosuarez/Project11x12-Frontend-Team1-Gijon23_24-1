import axios from "axios";

export default {
 uri: import.meta.env.VITE_API_ENDPOINT_CAMPS,
 uri2: import.meta.env.VITE_API_ENDPOINT_PRICES,
 uri3: import.meta.env.VITE_API_ENDPOINT_IMAGES,



//CRUD para Campamentos
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
 async editCamp(campId, camp) {
   try {
     const data = {
       camp_name: camp.camp_name,
       start_date: camp.start_date,
       end_date: camp.end_date,
       schedule: camp.schedule,
       description: camp.description,
       numdays: camp.numdays,
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
 

//  const myHeaders = new Headers();
//  myHeaders.append("Cookie", "JSESSIONID=1485ACC09FEDFBC10A123FC00CEB5F8B");
 
//  const requestOptions = {
//    method: "DELETE",
//    headers: myHeaders,
//    redirect: "follow"
//  };
 
//  try {
//    const response = await fetch("http://localhost:8080/api/v1/camps/6", requestOptions);
//    const result = await response.text();
//    console.log(result)
//  } catch (error) {
//    console.error(error);
//  };

//VITE_API_ENDPOINT_CAMPS=http://localhost:8080/api/v1/camps

 async deleteCamp(id) {
    try {
      await axios.delete(`${this.uri}/${id}`);
      console.log("Campamento borrado exitosamente.");
    } catch (error) {
      console.error("Error al borrar el campamento:", error);
      throw error;
    }
 },


 
// CRUD para Precios
async getPriceId(priceId)  {
  try {
     const response = await axios.get(`${this.uri2}/${priceId}`);
     return response.data;
  } catch (error) {
     console.error("Error al obtener el precio:", error);
     throw error;
  }
 },
 
async createPrice(campId, price)  {
  try {
     const response = await axios.post(`${this.uri2}`,{campId,price}, {
       headers: {
         "Content-Type": "application/json",
       },
       withCredentials: true,
     });
     return response.data;
  } catch (error) {
     console.error("Error al crear el precio:", error);
     throw error;
  }
 },
 
async updatePrice(priceId, data)  {
  try {
     const response = await axios.put(`${this.uri2}/${priceId}`, data, {
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
 },
 
async deletePrice(priceId) {
  try {
     await axios.delete(`${this.uri2}/${priceId}`);
     console.log("Precio borrado exitosamente.");
  } catch (error) {
     console.error("Error al borrar el precio:", error);
     throw error;
  }
 }







// //  async uploadImages(campId, formData) {
// //     try {
// //       await axios.post(`${this.uri3}/${campId}`, formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //         },
// //         withCredentials: true,
// //       });
// //       console.log("Imágenes subidas exitosamente.");
// //     } catch (error) {
// //       console.error("Error al subir las imágenes:", error);
// //       throw error;
// //     }
// //  },

//  async deleteCamp(campId) {
//     try {
//       await axios.delete(`${this.uri}/${campId}`);
//       console.log("Campamento borrado exitosamente.");
//     } catch (error) {
//       console.error("Error al borrar el campamento:", error);
//       throw error;
//     }
//  }
// }
 

 



// CRUD para Imágenes
// Aún no funcional, por lo que está comentado
/*
const getImage = async (imageId) => {
 try {
    const response = await axios.get(`${apiEndpoints.images}/${imageId}`);
    return response.data;
 } catch (error) {
    console.error("Error al obtener la imagen:", error);
    throw error;
 }
};

const createImage = async (campId, formData) => {
 try {
    const response = await axios.post(`${apiEndpoints.images}/${campId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return response.data;
 } catch (error) {
    console.error("Error al crear la imagen:", error);
    throw error;
 }
};

const updateImage = async (imageId, formData) => {
 try {
    const response = await axios.put(`${apiEndpoints.images}/${imageId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return response.data;
 } catch (error) {
    console.error("Error al actualizar la imagen:", error);
    throw error;
 }
};

const deleteImage = async (imageId) => {
 try {
    await axios.delete(`${apiEndpoints.images}/${imageId}`);
    console.log("Imagen borrada exitosamente.");
 } catch (error) {
    console.error("Error al borrar la imagen:", error);
    throw error;
 }
};
*/

}