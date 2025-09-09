/*JUROS COMPOSTOS – Leia o valor investido em uma aplicação, a taxa de juros (ao mês, em
percentual) e a quantidade de meses transcorridos. Exiba o montante depois de transcorrido o tempo,
considerando duas casas decimais depois da vírgula. Use o método Number.toFixed().*/

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let amountInvested: number = 0,
    interestRate: number = 0,
    monthsPassed: number = 0,
    amount: number = 0;

console.log("Digite o valor investido:");
amountInvested = keyboard.questionFloat("");
console.log("Digite a taxa de juros ao mês (em percentual):");
interestRate = keyboard.questionFloat("") / 100;
console.log("Digite a quantidade de meses transcorridos:");
monthsPassed = keyboard.questionInt("");
amount = amountInvested * Math.pow((1 + interestRate), monthsPassed);
console.log("O amount depois de " + monthsPassed + " meses é: R$ " + amount.toFixed(2));
