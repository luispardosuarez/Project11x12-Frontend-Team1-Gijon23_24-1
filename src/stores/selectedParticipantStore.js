import { defineStore } from "pinia";

export const useSelectedParticipantStore = defineStore({
    id: 'selectedParticipant',
    state:() => ({
        selectedParticipants: [],
    }),

    actions: {
      addSelectedParticipant(participant) {
        this.selectedParticipants.push(participant);
      },
      removeSelectedParticipant(participant) {
        this.selectedParticipants = this.selectedParticipants.filter(p => p !== participant);
      },
      clearSelectedParticipants() {
        this.selectedParticipants = [];
      },
      getSelectedParticipants() {
        return this.selectedParticipants;
      },
    },
  });
