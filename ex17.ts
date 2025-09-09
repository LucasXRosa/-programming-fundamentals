/*ESCADA – Conforme o exemplo da figura abaixo, leia a altura do prédio e a distância de afastamento
da escada. Calcule e exiba o comprimento mínimo que a escada deve ter para alcançar o topo do
prédio. */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let buildingHeight: number = 0,
    clearanceDistance: number = 0,
    stairLength: number = 0;

    console.log("Digite a altura do prédio em metros:");
    buildingHeight = keyboard.questionFloat("");
    console.log("Digite a distância de afastamento da escada em metros:");
    clearanceDistance = keyboard.questionFloat("");
    stairLength = Math.sqrt(Math.pow(buildingHeight, 2) + Math.pow(clearanceDistance, 2));
    console.log("O comprimento mínimo que a escada deve ter é: " + stairLength.toFixed(2) + " metros.");
