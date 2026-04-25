const fs=require('fs');
const input =fs.readFileSync(0,'utf-8').trim().split('\n');

let R=Number(input[0]);

let area=R*R*3.14159;

console.log("A=" + area.toFixed(4));