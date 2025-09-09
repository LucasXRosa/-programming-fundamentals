/*REFRIGERANTES – Leia a quantidade de pessoas que confirmaram presença em uma
confraternização. Considere que cada pessoa bebe, em média, 300ml de refrigerante e que cada
garrafa da bebida tem 2l. Identifique as constantes e fixe-as no código. Calcule e exiba quantas
garrafas devem ser compradas. */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let people: number = 0,
    averageConsumption: number = 0.3,
    bottleCapacity: number = 2, 
    totalComsumption: number = 0,
    necessaryBottles: number = 0;

console.log("Digite a quantidade de pessoas que irão comparecer à confraternização:");
people = keyboard.questionInt("");

totalComsumption = people * averageConsumption;
necessaryBottles = Math.ceil(totalComsumption / bottleCapacity);
console.log("Serão necessárias " + necessaryBottles + " garrafas de refrigerante.");

