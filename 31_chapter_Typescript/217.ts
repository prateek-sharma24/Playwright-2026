//Arrow function annotations
const multiply = (a:number,b:number):number=>a*b

//Object Annotations

let user: {name:string; age:number}={
    name :"John",
    age:30
};

function sayHello(msg:string):void{
    console.log(msg);
}

//Function Annotations
function greet (name:string):string{
    return 'Hello,${name}';
}