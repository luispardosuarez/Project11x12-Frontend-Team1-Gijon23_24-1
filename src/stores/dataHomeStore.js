
import { defineStore } from 'pinia';

export const useProjectStore = defineStore({
 id: 'project',
 state: () => ({
    description: "Los campamentos de Verano, Navidad y Semana Santa son una magnífica opción para que las familias de Gijón puedan conciliar las vacaciones laborales con las escolares, brindando una bonita  experiencia, aprendizaje y diversión a sus hijas e hijos. Estos campamentos están dirigidos a niñas y niños de 3 a 12 años (periodo escolar comprendido de infantil a primaria) y se realizan en 16 colegios públicos de Gijón. En los tres campamentos todos los niños y niñas tendrán a su disposición servicio de comida , como opción para ayudar a la conciliación familiar, también se ofrece la posibilidad de desayunar y merendar.",
    details: {
      inscriptionPeriod: "Del 11 de marzo de 2024 al 22 de marzo de 2024",
      inscriptionMode: "El modo de inscripción podrás hacerlo vía online. Si quieres hacerlo presencial pulsa aquí. Sigue los pasos para inscribirte en el botón Inscribirme.",
      prices: {
        daily: "6,10 euros por cada niño o niña. Se contemplan los habituales descuentos para las familias con varios hermanos y hermanas.",
        services: [
          { name: "Desayuno", price: "2,50 euros/día" },
          { name: "Comedor", price: "4,50 euros/día" },
          { name: "Merienda", price: "1,50 euros/día" },
        ],
      },
      schedules: "El horario de las actividades de los campamentos será de 9:00 am a las 2:00 pm ofreciéndose además la posibilidad de atención temprana con desayuno desde las 7:30 am, comida y el servicio de catering de merienda para aquellas familias que así lo demanden.",
      foodGrants: "Las familias que tienen concedida la beca de comedor al 100 por 100 del Ayuntamiento de Gijón/Xixón siguen manteniendo una ayuda equivalente a dicho porcentaje en este actividad.",
    },
 }),
});