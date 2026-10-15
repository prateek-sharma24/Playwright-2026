//prompt keyword can't used as this can be used for user input in browser only under console under dev options , we will use node js functions can be used on 
let num = prompt("enter the number");
num = num(Number) //convert string to number
if(n%2===0)
{
    console.log(num + " is Even");
}
else
{
    console.log(num + "is Odd");
}