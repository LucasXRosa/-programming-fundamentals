/*ARREDONDAMENTO – Pesquise, teste e diferencie os métodos de Math: ceil(), floor(),
round() e trunc(). */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let num: number = 0.0;
console.log("Digite um número real:");
num = keyboard.questionFloat("");

console.log("Número digitado: " + num);
console.log("Math.ceil(): " + Math.ceil(num));   // Arredonda para cima
console.log("Math.floor(): " + Math.floor(num)); // Arredonda para baixo
console.log("Math.round(): " + Math.round(num)); // Arredonda para o inteiro
console.log("Math.trunc(): " + Math.trunc(num)); // Trunca a parte decimal

// Teste com números negativos
num = -num;
console.log("Número digitado: " + -num);
console.log("Math.ceil(): " + Math.ceil(num));   // Arredonda para cima
console.log("Math.floor(): " + Math.floor(num)); // Arredonda para baixo
console.log("Math.round(): " + Math.round(num)); // Arredonda para o inteiro
console.log("Math.trunc(): " + Math.trunc(num)); // Trunca a parte
