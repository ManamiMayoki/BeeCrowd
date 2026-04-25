const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim().split('\n');

let R=input[0];

let volume=(4/3)*3.14159*Math.pow(R,3);

console.log("VOLUME = "+volume.toFixed(3));