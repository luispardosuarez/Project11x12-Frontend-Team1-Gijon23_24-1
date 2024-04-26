import axios from "axios";
import { defineStore } from "pinia";

export const useCampWeeksStore = defineStore({
    id: 'campWeeks',
    state: () => ({
       weeks: [],
       selectedDateRange: null, 
    }),

    actions: {
        async fetchWeeks() {
          try {
            const response = await axios.get(import.meta.env.VITE_API_ENDPOINT_CAMPWEEKS);
            if (response.status !== 200) {
              throw new Error('Error al cargar los datos de camp_weeks');
            }
            this.weeks = response.data;
          } catch (error) {
            console.error('Error al cargar los datos de camp_weeks:', error);
          }
        },
        setSelectedDateRange(range) {
          this.selectedDateRange = range;
        },
      },
      getters: {
        getWeeksByCampId: (state) => (campId) => {
          return state.weeks.filter(week => week.camp_id === campId);
        },
      },
    });