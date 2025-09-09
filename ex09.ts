/*MCDU – Leia um número inteiro positivo de até quatro dígitos. Mostre, separadamente (uma por
linha): unidades de milhar, centenas, dezenas e unidades desse número. Assuma que nenhum
número maior, ou negativo, será digitado. */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let num: number = 0,
    unitThousands: number = 0,
    hundred: number = 0,
    ten: number = 0,
    unit: number = 0,
    rest: number = 0;

console.log("Digite um número inteiro positivo de até quatro dígitos:");
num = keyboard.questionInt("");
unitThousands = Math.floor(num / 1000);
rest = num % 1000;
hundred = Math.floor(rest / 100);
rest = rest % 100;
ten = Math.floor(rest / 10);
rest = rest % 10;
unit = rest;

console.log("Unidade de Milhar: " + unitThousands);
console.log("Centena: " + hundred);
console.log("Dezena: " + ten);
console.log("Unidade: " + unit);
