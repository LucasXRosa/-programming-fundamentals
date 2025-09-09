/*Implemente um aplicativo TypeScript onde o usuário informa o número no ingresso, 
esse número de ingresso informa sua mesa e lugar de forma sequencial, afinal as mesas 
possuem 8 lugares, após os 8 primeiros lugares troca-se para a mesa 2 e assim por diante.*/

import ReadlineSync from "../exercises/readline-sync.ts";
let keyboard = new ReadlineSync();

let ticketNumber: number = 0,
    tableNumber: number = 0,
    seatNumber: number = 0;

console.log("Digite o número do ingresso:");
ticketNumber = keyboard.questionInt("");

tableNumber = Math.floor((ticketNumber - 1) / 8) + 1;
seatNumber = ((ticketNumber - 1) % 8) + 1;

console.log("Mesa: " + tableNumber + ", Lugar: " + seatNumber);