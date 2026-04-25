const fs=require('fs');
const input = fs.readFileSync(0,'utf-8').trim().split('\n');

let A=Number(input[0]);
let B=Number(input[1]);

let media=(A*3.5 + B*7.5)/11;

console.log("MEDIA = "+media.toFixed(5));