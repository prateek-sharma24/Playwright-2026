const prompt =require('prompt-sync')();
let num = prompt("Enter numbers: ").split(" ").map(Number);

for(let i=0;i<num.length;i++)
{
    if(num.indexOf(num[i]) !== i) continue;

    let count =0;
    for(let j=0;j<num.length;j++)
    {
        if(num[i]===num[j])
        {
            count++;
        }
    }
    console.log(num[i] + " appears"  + count + " times ");
}


