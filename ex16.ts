/*TORNEIO – Leia a pontuação dos cinco finalistas de um torneio de videogame (números inteiros e
não estarão em ordem). Sem o uso de condicionais. Apresente a pontuação do primeiro e do último colocado. */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let p1: number = 0,
    p2: number = 0,
    p3: number = 0,
    p4: number = 0,
    p5: number = 0,
    highest: number = 0,
    lowest: number = 0;

console.log("Digite a pontuação do primeiro colocado:");
p1 = keyboard.questionInt("");
console.log("Digite a pontuação do segundo colocado:");
p2 = keyboard.questionInt("");
console.log("Digite a pontuação do terceiro colocado:");
p3 = keyboard.questionInt("");
console.log("Digite a pontuação do quarto colocado:");
p4 = keyboard.questionInt("");
console.log("Digite a pontuação do quinto colocado:");
p5 = keyboard.questionInt("");
highest = Math.max(p1, p2, p3, p4, p5);
lowest = Math.min(p1, p2, p3, p4, p5);
console.log("A maior pontuação é: " + highest);
console.log("A menor pontuação é: " + lowest);


