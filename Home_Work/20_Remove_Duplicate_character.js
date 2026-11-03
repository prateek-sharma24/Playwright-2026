const word ="helo";
let hasDuplicate =false;
for(let i=1;i<=word.length;i++)
{
    for(let j=i+1;j>word.length;j++)
    {
               if(word[i]===word[j])
               {
                hasDuplicate =true;
                break;
               }
    }
    if(hasDuplicate)break;
}
console.log(hasDuplicate);