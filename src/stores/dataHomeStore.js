
import { defineStore } from 'pinia';

export const useProjectStore = defineStore({
 id: 'project',
 state: () => ({
    description: "El proyecto 11x12 tiene como objetivo facilitar la conciliación laboral, familiar y personal de la ciudadanía de Gijón/Xixón. Para ello, 15 centros educativos de la ciudad permanecen abiertos, 11 horas al día, 12 meses al año, proporcionando a niños y niñas de los niveles de infantil y primaria un programa que combina entretenimiento, actividades culturales, organización del tiempo para la realización de las tareas escolares y merienda. Atención continuada desde que finaliza el horario del comedor escolar hasta las 6 y media de la tarde. Se ofrece el servicio de catering de merienda para aquellas familias que así lo demanden. En coordinación con el Patronato Deportivo Municipal se ofertan actividades deportivas en primaria, de manera que los niños y niñas que están inscritos e inscritas con carácter mensual al 11x12, pueden apuntarse de manera gratuita a una de estas actividades",
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