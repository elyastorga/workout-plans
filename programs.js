// Programas de entrenamiento. Para agregar uno nuevo, copia el bloque de "shred"
// y cambia los datos. Formato de ejercicio: [nombre, series, reps, tipo]
// tipo: "kg" (por defecto) o "time" (segundos, p. ej. plancha).
const PROGRAMS = {
  shred: {
    name: "Shred",
    focus: "Pérdida de grasa",
    weeks: 8,
    phases: [
      {
        label: "Semanas 1–4", from: 1, to: 4, steps: "10k",
        days: [
          { title: "Lower Body", subtitle: "Día 1", cardio: null, ex: [
            ["Hack squat", 3, "6-8"],
            ["Barbell KAS glute bridge", 3, "6-8"],
            ["Machine Bulgarian split squat", 2, "6-8"],
            ["45° glute-focused hyperextension", 2, "8-10"],
            ["Seated leg curl", 2, "8-10"],
            ["Smith machine calf raises", 3, "10-12"],
          ]},
          { title: "Upper Body", subtitle: "Día 2", cardio: "30 min incline treadmill / jogging / bici fija / stairmaster", ex: [
            ["Smith machine shoulder press", 2, "6-8"],
            ["Inverted row", 3, "6-8"],
            ["Pull ups", 2, "6-8"],
            ["Face pulls", 2, "8-10"],
            ["Standing overhead cable triceps", 2, "8-10"],
            ["Dumbbell curl", 2, "10-12"],
            ["Cable crunch", 3, "12-15"],
            ["Leg raises", 3, "12-15"],
          ]},
          { title: "Lower Body", subtitle: "Día 3", cardio: null, ex: [
            ["Barbell Romanian deadlift", 3, "10-12"],
            ["Smith machine step up", 2, "10-12"],
            ["Dumbbell goblet squat", 2, "8-10"],
            ["Seated leg curl", 2, "10-12"],
            ["Leg extension", 2, "10-12"],
            ["Smith machine calf raises", 3, "12-15"],
          ]},
          { title: "Upper Body", subtitle: "Día 4", cardio: "30 min incline treadmill / jogging / bici fija / stairmaster", ex: [
            ["Lat pulldown (agarre prono, ancho de hombros)", 2, "10-12"],
            ["Standing dumbbell lateral raises", 3, "10-12"],
            ["Chest supported dumbbell row", 2, "8-10"],
            ["Machine chest fly", 2, "10-12"],
            ["Incline hammer curl", 2, "10-12"],
            ["Triceps cable pushdown", 2, "12-15"],
            ["Cable crunch", 3, "12-15"],
            ["Leg raises", 3, "12-15"],
          ]},
        ],
      },
      {
        label: "Semanas 5–8", from: 5, to: 8, steps: "12k",
        days: [
          { title: "Lower Body", subtitle: "Día 1", cardio: null, ex: [
            ["Inverted hack squat", 2, "4-6"],
            ["Barbell hip thrust", 3, "6-8"],
            ["Machine Bulgarian split squat", 2, "6-8"],
            ["Seated hip abduction", 2, "8-10"],
            ["Seated leg curl", 2, "8-10"],
            ["Smith machine calf raises", 3, "10-12"],
          ]},
          { title: "Upper Body", subtitle: "Día 2", cardio: "45 min incline treadmill / jogging / bici fija / stairmaster", ex: [
            ["Military shoulder press", 3, "6-8"],
            ["Bent over barbell row", 2, "4-6"],
            ["Pull ups", 2, "6-8"],
            ["Rear delt machine fly", 2, "6-8"],
            ["Triceps dips", 2, "8-10"],
            ["Standing alternating dumbbell curl", 2, "8-10"],
            ["Cable crunch", 3, "12-15"],
            ["Leg raises", 3, "12-15"],
          ]},
          { title: "Lower Body", subtitle: "Día 3", cardio: null, ex: [
            ["Barbell Romanian deadlift", 3, "10-12"],
            ["Smith machine reverse lunge", 2, "6-8"],
            ["Heels elevated goblet squat", 2, "8-10"],
            ["Lying / seated leg curl", 2, "10-12"],
            ["Leg extension", 2, "10-12"],
            ["Smith machine calf raises", 3, "12-15"],
            ["Plank hold", 1, "Al fallo · mín. 1 min", "time"],
          ]},
          { title: "Upper Body", subtitle: "Día 4", cardio: "45 min incline treadmill / jogging / bici fija / stairmaster", ex: [
            ["Chin ups", 2, "6-8"],
            ["Seated dumbbell shoulder press", 2, "6-8"],
            ["Bent over single arm dumbbell row", 2, "8-10"],
            ["Barbell bench press", 2, "8-10"],
            ["EZ bar curl", 2, "10-12"],
            ["Dumbbell skull crusher", 2, "12-15"],
            ["Cable crunch", 3, "12-15"],
            ["Leg raises", 3, "12-15"],
          ]},
        ],
      },
    ],
  },
};

// Descanso sugerido según rango de reps (segundos)
function suggestedRest(reps) {
  const lo = parseInt(reps, 10);
  if (isNaN(lo)) return 60;
  if (lo <= 5) return 180;
  if (lo <= 8) return 150;
  if (lo <= 10) return 120;
  return 90;
}
