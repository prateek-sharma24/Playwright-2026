const prompt =require('prompt-sync')();
let num =Number(prompt("Enter number: "));
out = "";
for(let i=1;i<=num;i++)
{
        if(i%15 === 0)
        {
            out += "FizzBuzz ";
        }
        else if(i%3 === 0)
        {
            out += "Fizz ";
        }
        else if(i%5 === 0)
        {
            out += "Buzz ";
        }
        else
        {
            out += i + " ";
        }
    }

console.log(out.trim());