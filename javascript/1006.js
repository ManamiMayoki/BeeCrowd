const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim().split('\n');

let A=Number(input[0]);
let B=Number(input[1]);
let C=Number(input[2]);

let media=(A*2+B*3+C*5)/10;

console.log("MEDIA = "+media.toFixed(1));