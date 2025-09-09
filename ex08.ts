/*QUADRADO – Leia um número inteiro, calcule e exiba o seu quadrado. */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let num: number = 0,
    square: number = 0;

console.log("Digite um número inteiro:");
num = keyboard.questionInt("");
square = num * num;
console.log("O quadrado do número " + num + " é: " + square + ".");
