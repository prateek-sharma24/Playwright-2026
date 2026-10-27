//var is actually cheater
//let is a sincere person
//const is just const which will not change
//var is a function level scope , it will not take the block level value
var a =10;
console.log(a);
function printHello()
{
    console.log("Yo Yo Test");
    var a=20;
    console.log(a);
    if(true)
    {
        var a =30;
        console.log(a);
    }
    console.log(a);
}
printHello();