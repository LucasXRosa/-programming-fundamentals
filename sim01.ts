/* PREÇO DE VENDA - Implemente um aplicativo TypeScript que calcule o preço de venda de um produto. 
Considere que o vendedor sabe o quanto ele quer pelo produto, mas que o veículo divulgação cobra
uma taxa percentual sobre o valor anunciado. Com isso, determine quanto deve ser pedido pelo
produto para que, mesmo com o desconto dessa taxa, ainda reste o valor inicialmente
pretendido pelo vendedor. Serão fornecidos pelo usuário: o valor líquido que ele
deseja receber e o percentual cobrado pelo veículo de divulgação, ambos reais.

EXEMPLO DE INTERAÇÃO:

    Digite o valor desejado para o produto: 100
    Digite o percentual cobrado pelo veículo: 75

    Valor que deve ser pedido pelo produto: 400 */

import ReadlineSync from "../exercises/readline-sync.ts";
let keyboard = new ReadlineSync();

let desiredValue: number = 0,
    percentage: number = 0,
    salePrice: number = 0;

console.log("Digite o valor desejado para o produto:");
desiredValue = keyboard.questionFloat("");

console.log("Digite o percentual cobrado pelo veículo:");
percentage = keyboard.questionFloat("");

salePrice = desiredValue / (1 - (percentage / 100));
console.log("Valor que deve ser pedido pelo produto: " + salePrice.toFixed(2));