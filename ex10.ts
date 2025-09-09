/*DÍGITO VERIFICADOR – Leia o número de uma conta corrente, que tem até seis dígitos
(desnecessária a validação). Calcule o dígito verificador dessa conta corrente, de acordo com o
seguinte algoritmo:
– Multiplique cada dígito pela respectiva posição, da esquerda para a direita;
– Some os resultados das multiplicações;
– Calcule o resto da divisão dessa soma por 10;
– Subtraia esse valor de 10.
– Assuma o resultado como dígito verificador da conta.

Exemplo para a conta 789123:
 7 8 9 1 2 3 = número da conta
 | | | | | |
x1 x2 x3 x4 x5 x6
 | | | | | |
=7 =16 =27 =4 =10 =18 -> soma = 82

resto da divisão de 82 por 10 = 2
 dígito verificador = (10 – 2) = 8

A conta, com o dígito verificador, será: 789123-8. Precisa-se que o número esteja assim: 789123-8. E sem condicionais.*/

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let count: number = 0,
    d1: number = 0,
    d2: number = 0,
    d3: number = 0,
    d4: number = 0,
    d5: number = 0,
    d6: number = 0,
    sum: number = 0,
    rest: number = 0,
    checkDigit: number = 0;

console.log("Digite o número da conta corrente (até 6 dígitos):");
count = keyboard.questionInt("");
d1 = Math.floor(count / 100000);
d2 = Math.floor((count % 100000) / 10000);
d3 = Math.floor((count % 10000) / 1000);
d4 = Math.floor((count % 1000) / 100);
d5 = Math.floor((count % 100) / 10);
d6 = Math.floor(count % 10);
sum = (d1 * 1) + (d2 * 2) + (d3 * 3) + (d4 * 4) + (d5 * 5) + (d6 * 6);
rest = sum % 10;
checkDigit = 10 - rest;

console.log("O número da conta com o dígito verificador é: " + count + "-" + checkDigit);
