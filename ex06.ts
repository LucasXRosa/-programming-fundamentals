/*AUMENTO – Leia o valor de um salário, calcule e exiba-o reajustado, considerando um aumento de
12,5%. */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let salary: number = 0,
    adjustedSalary: number = 0;
const INCREASE: number = 0.125;

console.log("Digite o valor do salário:");
salary = keyboard.questionFloat("");
adjustedSalary = salary + salary * INCREASE;
console.log("O valor do salário reajustado é: R$ " + adjustedSalary.toFixed(2) + ".");
