/*ÂNGULO – Leia um número real que denota um ângulo (em graus). Feito isso, calcule e exiba:
(a) O ângulo correspondente menor que 360º. Por exemplo, o ângulo de 1.090º perfaz três voltas
completas e corresponde ao ângulo de 10º;
(b) O ângulo em radianos. Use a constante PI predefinida; e
(c) O seno, o cosseno e a tangente desse ângulo. */

import ReadlineSync from "./readline-sync.ts";
let keyboard = new ReadlineSync();

let angle: number = 0,
    smallerAngle360: number = 0,
    radianAngle: number = 0,
    sine: number = 0,
    cosine: number = 0,
    tangent: number = 0;

console.log("Digite um ângulo em graus:");
angle = keyboard.questionFloat("");
smallerAngle360 = angle % 360;
radianAngle = smallerAngle360 * (Math.PI / 180);
sine = Math.sin(radianAngle);
cosine = Math.cos(radianAngle);
tangent = Math.tan(radianAngle);
console.log("O ângulo menor que 360º é: " + smallerAngle360.toFixed(2) + "º");
console.log("O ângulo em radianos é: " + radianAngle.toFixed(2) + " rad");
console.log("O seno do ângulo é: " + sine.toFixed(2));
console.log("O cosseno do ângulo é: " + cosine.toFixed(2));
console.log("A tangente do ângulo é: " + tangent.toFixed(2));