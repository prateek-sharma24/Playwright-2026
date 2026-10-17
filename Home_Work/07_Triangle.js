const prompt = require('prompt-sync')();
let a = Number(prompt("Enter side A: "));
let b = Number(prompt("Enter side B: "))
let c = Number(prompt("Enter side C: "));

if(a!==a || b!==b || c!==c || a<=0 || b<=0 || c<=0 || a+b<=c || a+c<=b || b+c<=a)
{
    console.log("Invalid triangle");
}
else if(a===b && b===c)
{
    console.log("Equilateral");
}
else if(a===b || b===c || c===a)
{
    console.log("Isosceles");
}
else
{
    console.log("Scalene");
}