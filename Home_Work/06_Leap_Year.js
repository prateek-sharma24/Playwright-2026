const prompt = require('prompt-sync')();
let year = Number(prompt("Enter the year: "));
if(year %400 ===0 || year%4 ===0 && year%100 !==0)
{
    console.log(year,"is a Leap year");
}
else
{
    console.log(year,"is not a leap year");
}
