const prompt = require("prompt-sync")();
let num = prompt("Enter the number: ").split(" ").map(Number);
const printed = new Set();

for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] === num[j] && !printed.has(num[i])) {
      console.log(num[i]);
      printed.add(num[i]);
      break;
    }
  }
}