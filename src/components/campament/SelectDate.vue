<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { defineEmits, ref, watch } from 'vue';
import InputWeek from './InputWeek.vue';

const start_date = ref(null);
const end_date = ref(null);
const weeks = ref([]);

// Define los eventos que este componente puede emitir
const emit = defineEmits(['update:dates']);

function weeksBetween(start_date, end_date) {
 const start = new Date(start_date);
 const end = new Date(end_date);

 // Ajusta start para que sea el primer lunes
 while (start.getDay() !== 1) {
    start.setDate(start.getDate() + 1);
 }

 // Ajusta end para que sea el último viernes
 while (end.getDay() !== 5) {
    end.setDate(end.getDate() - 1);
 }

 // Calcula el número de semanas entre el primer lunes y el último viernes
 const diffInDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
 const numberOfWeeks = Math.floor(diffInDays / 7); // Divide por 7 para contar solo semanas completas

 return numberOfWeeks;
}

watch([start_date, end_date], ([newStart, newEnd]) => {
 if (newStart && newEnd) {
  console.log("Emitiendo fechas:", { startDate: newStart, endDate: newEnd });
    emit('update:dates', { startDate: newStart, endDate: newEnd });
    const numberOfWeeks = weeksBetween(newStart, newEnd);
    weeks.value = Array.from({ length: numberOfWeeks }, (_, i) => {
      const startWeek = new Date(newStart.getTime() + (i * 7 * 24 * 60 * 60 * 1000)); // Multiplica por 7 para contar solo semanas completas
      const endWeek = new Date(startWeek.getTime() + (4 * 24 * 60 * 60 * 1000)); // Agrega 4 días para obtener el viernes de esa semana
      return {
        start: startWeek,
        end: endWeek,
        selected: false 
      };
    });
    // Emite el evento con las fechas de inicio y fin
    emit('update:dates', { startDate: newStart, endDate: newEnd });
 }
});
</script>
<template>
  <div class="date-pickers-container">
     <label>Fecha inicial:
       <VueDatePicker class="w-75" v-model="start_date"></VueDatePicker>
     </label>
     <label>Fecha final:
       <VueDatePicker class="w-75" v-model="end_date"></VueDatePicker>
     </label>
     <InputWeek :weeks="weeks" />
  </div>
 </template>