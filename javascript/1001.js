const fs =require('fs');
const input = fs.readFileSync(0,'utf-8').trim().split('\n');


let A=Number(input[0]);
let B=Number(input[1]);

console.log("X =", A+B);