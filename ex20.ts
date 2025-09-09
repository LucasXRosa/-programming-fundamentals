/*VELOCIDADE MÉDIA - Leia uma distância (em quilômetros) e o tempo transcorrido (em horas). Sem condicionais.
Calcule e retorne a velocidade média atingida. Justifique o que acontece se o tempo digitado for zero.*/

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let distance: number = 0,
    time: number = 0,
    averageSpeed: number = 0;

console.log("Digite a distância percorrida em quilômetros:");
distance = keyboard.questionFloat("");
console.log("Digite o time transcorrido em horas:");
time = keyboard.questionFloat("");
averageSpeed = distance / time;
console.log("A velocidade média atingida é: " + averageSpeed.toFixed(2) + " km/h");

