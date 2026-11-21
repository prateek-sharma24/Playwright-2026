function infiniteloop():never{
    while(true){}
}

//never-function never returns (throwsor infinite loop)

function throwError(message:string):never{
    throw new Error(message);
}