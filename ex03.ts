/*CARGA-HORÁRIA – Leia a carga-horária de um curso, informada em horas-aulas (50 minutos).
Calcule e exiba a carga-horária em horas-relógio (60 minutos). */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let classes: number = 0,
    hours: number = 0;
const MINUTES_PER_CLASS: number = 50,
    MINUTES_PER_HOUR: number = 60;

console.log("Digite a carga-horária do curso em horas-aulas:");
classes = keyboard.questionInt("");
hours = Math.ceil((classes * MINUTES_PER_CLASS) / MINUTES_PER_HOUR);
console.log("A carga-horária do curso em horas-relógio é: " + hours + " horas.");
