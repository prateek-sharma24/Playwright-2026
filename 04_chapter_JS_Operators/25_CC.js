let a = 5;
let output = "";
for (let i = 1; i <= 10; i++)
{
    let result = a * i; 
    output+= `${a}X${i} =${result} `;
    
}
console.log(output);