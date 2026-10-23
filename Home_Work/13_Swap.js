const prompt = require('prompt-sync')();
let [a,b] = prompt("Enter your numbers:").trim().split(/\s+/).map(Number);
[a,b]=[b,a];
console.log(a,b);