//Function as a expression

function greet(name)
{
    return `Hello,${name}`;
}
//Anonymous Function- function without a name
let c =function greet(name)
{
    return `Hello, ${name}`;
}

console.log(greet("Prateek"));
console.log(c("Pratham"));