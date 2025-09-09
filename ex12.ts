/*CAIXA ELETRÔNICO – Leia um número inteiro referente ao valor de um saque em reais (R$).
Apresente a composição desse valor pelas notas e moeda existentes. Sempre opte primeiro por
notas de maior valor. Obedeça o comportamento e as mensagens de saída do exemplo.
Digite o valor do saque: 383 <enter>
Dinheiro retirado:
3 nota(s) de R$ 100
1 nota(s) de R$ 50
1 nota(s) de R$ 20
1 nota(s) de R$ 10
0 nota(s) de R$ 5
1 nota(s) de R$ 2
1 moeda(s) de R$ 1
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
    rest: number = 0;

console.log("Digite o valor do withdraw:");
withdraw = keyboard.questionInt("");

b100 = Math.floor(withdraw / 100);
rest = withdraw % 100;
b50 = Math.floor(rest / 50);
rest = rest % 50;
b20 = Math.floor(rest / 20);
rest = rest % 20;
b10 = Math.floor(rest / 10);
rest = rest % 10;
b5 = Math.floor(rest/5);
rest = rest % 5;
b2 = Math.floor(rest/2);
rest = rest % 2;
c1 = Math.floor(rest/1);
rest = rest % 1;

console.log ("O seu saque será de R$ " + withdraw);
console.log ("Dinheiro retirado:");
console.log (b100 + " nota(s) de R$ 100");
console.log (b50 + " nota(s) de R$ 50");
console.log (b20 + " nota(s) de R$ 20");
console.log (b10 + " nota(s) de R$ 10");
console.log (b5 + " nota(s) de R$ 5");
console.log (b2 + " nota(s) de R$ 2");
console.log (c1 + " moeda(s) de R$ 1");