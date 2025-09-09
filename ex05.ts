/*DESCONTO – Leia o preço de um produto, calcule e exiba o valor final, considerando desconto de
35%. */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let price: number = 0,
    finalPrice: number = 0;
const DISCOUNT: number = 0.35;

console.log("Digite o preço do produto:");
price = keyboard.questionFloat("");
finalPrice = price - price * DISCOUNT;
console.log("O valor final do produto com desconto é: R$ " + finalPrice.toFixed(2) + ".");
