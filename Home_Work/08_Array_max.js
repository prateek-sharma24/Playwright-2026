const prompt = require('prompt-sync')();
let numbers = prompt("Enter your numbers:").split(" ").map(Number);
let max =numbers[0];
for(let i=1;i<numbers.length;i++)
{
    if(numbers[i]>max) max =numbers[i];

}
 console.log("Maximum",max);

