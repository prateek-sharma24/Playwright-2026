const prompt = require('prompt-sync')();
let numbers = prompt("Enter your numbers:").trim().split(/\s+/).map(Number);
let min =numbers[0];
for(let i=1;i<numbers.length;i++)
{
    if(numbers[i]<min) min =numbers[i];

}
 console.log("Smallest",min);

