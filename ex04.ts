/*PERCENTUAL DE LEITURA – Leia a página atual e a quantidade de páginas de um livro. Calcule e
exiba o percentual de leitura concluído. */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let currentPage: number = 0,
    totalPages: number = 0,
    percentRead: number = 0;

console.log("Digite a página atual do livro:");
currentPage = keyboard.questionInt("");
console.log("Digite a quantidade total de páginas do livro:");
totalPages = keyboard.questionInt("");
percentRead = (currentPage / totalPages) * 100;
console.log("O percentual de leitura concluído é: " + percentRead.toFixed(2) + "%.");
