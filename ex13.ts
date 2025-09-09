/*CAIXA ELETRÔNICO COM CENTAVOS – Leia um número inteiro referente ao valor de um saque em reais (R$).
Apresente a composição desse valor pelas notas e moeda existentes. Sempre opte primeiro por
notas de maior valor. Obedeça o comportamento e as mensagens de saída do exemplo.
Digite o valor do saque: 383.83. Mas considere que o valor lido será um
número real com duas casas decimais.
 */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let withdraw: number = 0,
    b100: number = 0,
    b50: number = 0,
    b20: number = 0,
    b10: number = 0,
    b5: number = 0,
    b2: number = 0,
    c1: number = 0,
    c50: number = 0,
    c25: number = 0,
    c10: number = 0,
    c05: number = 0,
    c01: number = 0,
    rest: number = 0;

console.log("Digite o valor do withdraw:");
withdraw = Math.round(keyboard.questionFloat("") * 100);
b100 = Math.floor(withdraw / 10000);
rest = withdraw % 10000;
b50 = Math.floor(rest / 5000);
rest = rest % 5000;
b20 = Math.floor(rest / 2000);
rest = rest % 2000;
b10 = Math.floor(rest / 1000);
rest = rest % 1000;
b5 = Math.floor(rest / 500);
rest = rest % 500;
b2 = Math.floor(rest / 200);
rest = rest % 200;
c1 = Math.floor(rest / 100);
rest = rest % 100;
c50 = Math.floor(rest / 50);
rest = rest % 50;
c25 = Math.floor(rest / 25);
rest = rest % 25;
c10 = Math.floor(rest / 10);
rest = rest % 10;
c05 = Math.floor(rest / 5);
rest = rest % 5;
c01 = Math.floor(rest / 1);
rest = rest % 1;

console.log ("O seu saque será de R$ " + (withdraw / 100).toFixed(2));
console.log ("Dinheiro retirado:");
console.log (b100 + " nota(s) de R$ 100.00");
console.log (b50 + " nota(s) de R$ 50.00");
console.log (b20 + " nota(s) de R$ 20.00");
console.log (b10 + " nota(s) de R$ 10.00");
console.log (b5 + " nota(s) de R$ 5.00");
console.log (b2 + " nota(s) de R$ 2.00");
console.log (c1 + " moeda(s) de R$ 1.00");
console.log (c50 + " moeda(s) de R$ 0.50");
console.log (c25 + " moeda(s) de R$ 0.25");
console.log (c10 + " moeda(s) de R$ 0.10");
console.log (c05 + " moeda(s) de R$ 0.05");
console.log (c01 + " moeda(s) de R$ 0.01");
