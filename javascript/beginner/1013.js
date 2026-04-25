// Read input (Node.js environment)
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number);

// Get the three values
const a = input[0];
const b = input[1];
const c = input[2];

// Function to find the greatest using the formula
function maior(x, y) {
    return (x + y + Math.abs(x - y)) / 2;
}

// Apply the formula
let m = maior(a, b);
m = maior(m, c);

// Output result
console.log(`${m} eh o maior`);