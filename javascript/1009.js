const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim().split('\n');

let name=input[0];
let salary=Number(input[1]);
let sell=Number(input[2]);

console.log("TOTAL = R$ "+(salary+(sell*0.15)).toFixed(2));