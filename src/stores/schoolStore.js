import { defineStore } from "pinia";

export const useSchoolStore = defineStore({
    id: 'school',
    state:() => ({
        selectedSchool: null,

    }),

    actions: {
        setSelectedSchool(school) {
            this.selectedSchool = school;
        },
    },
});