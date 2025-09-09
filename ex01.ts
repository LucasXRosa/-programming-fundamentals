/*GOTAS – Leia a quantidade de uma solução em mililitros. Converta e exiba essa mesma quantidade
em gotas. Para essa solução, assuma que uma gota equivale a 0,05ml (ou seja, 1ml corresponde a
20 gotas). */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let ml: number = 0,
    drops: number = 0;

console.log("Digite a quantidade de solução em ml:");
ml = keyboard.questionFloat("");
drops = ml * 20;
console.log("A quantidade de drops é: " + drops + " drops.");
