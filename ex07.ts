/*TROCA DE VALORES – Leia dois números inteiros, a e b, e faça com que eles troquem os valores
entre si. Exiba os valores de a e b. Não se deve apenas alterar a ordem de exibição. */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let a: number = 0,
    b: number = 0,
    temp: number = 0;

console.log("Digite o valor de a:");
a = keyboard.questionInt("");
console.log("Digite o valor de b:");
b = keyboard.questionInt("");
temp = a;
a = b;
b = temp;

console.log("Após a troca, o valor de a é: " + a + ", e o valor de b é: " + b + ".");
