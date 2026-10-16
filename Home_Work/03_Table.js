//Print table of 5
const prompt =require('prompt-sync')();
let num = Number(prompt("Enter your number"));
let output = " ";
for(let i=1;i<=10;i++)
{
    let result = num*i;
    output += `${num} X ${i} = ${result} `;
}
console.log(output.trim());

