
import axios from 'axios';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
 state: () => ({
    id: null,
    username: '',
    password: '',
    roles: [],
 }),
 actions: {

   async fetchUser(id) {
      const uri = import.meta.env.VITE_API_ENDPOINT_USERS
      try {
         const response = await axios.get(`${uri}/${id}`);
         this.setUser(response.data);
      } catch (error) {
         console.error('Error fetching user:', error);
      }
   },
    setUser(user) {
      this.id = user.id;
      this.username = user.username;
      this.password = user.password;
      this.roles = user.roles;
    },
 },
});




// export default class User  {
//     id 
//     username
//     password
    

//     constructor (id, username, password){
//         this.id = id;
//         this.username = username;
//         this.password = password;
        
//     }
// } 