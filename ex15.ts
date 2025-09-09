/*PISCINA – Leia a altura e o raio (ambos em metros) de uma piscina redonda. Calcule e mostre a
quantidade de água (em litros) necessária para encher essa piscina completamente. Arredonde o
valor para cima */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let height: number = 0,
    radius: number = 0,
    volume: number = 0,
    liters: number = 0;

console.log("Digite a altura da piscina em metros:");
height = keyboard.questionFloat("");
console.log("Digite o raio da piscina em metros:");
radius = keyboard.questionFloat("");
volume = Math.PI * Math.pow(radius, 2) * height;
liters = Math.ceil(volume * 1000);
console.log("A quantidade de água necessária para encher a piscina é: " + liters + " litros.");
