const word = 'level';
 let reversed = "";
 for(let i=word.length-1;i>=0;i--)
 {
    reversed += word[i];
}
if(word===reversed)
{
    console.log(word,"is pallindrome");
}
else
{
    console.log(word,"is not a pallindrome");
}