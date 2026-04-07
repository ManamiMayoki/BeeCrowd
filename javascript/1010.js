const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim().split('\n');

let [a1,b1,c1]=input[0].split(' ');
a1=parseInt(a1);
c1=parseFloat(c1);

let [a2,b2,c2]=input[1].split(' ');
a2=parseInt(a2);
c2=parseFloat(c2);

let total=(b1*c1)+(b2*c2);

console.log("VALOR A PAGAR: R$ "+total.toFixed(2));