const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim().split('\n');

let A=Number(input[0]);
let B=Number(input[1]);
let C=Number(input[2]);
let D=Number(input[3]);

let DIFERENCA=(A*B-C*D);

console.log("DIFERENCA = " + DIFERENCA);