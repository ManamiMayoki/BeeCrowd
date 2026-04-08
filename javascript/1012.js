const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim().split('\n');

let list=input[0].split(" ");
let A=parseFloat(list[0]);
let B=parseFloat(list[1]);
let C=parseFloat(list[2]);

console.log("TRIANGULO: "+((A*C)/2).toFixed(3))
console.log("CIRCULO: "+(3.14159*(Math.pow(C,2))).toFixed(3))
console.log("TRAPEZIO: "+((A+B)*C/2).toFixed(3))
console.log("QUADRADO: "+(Math.pow(B,2)).toFixed(3))
console.log("RETANGULO: "+(A*B).toFixed(3))
