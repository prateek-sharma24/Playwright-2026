//Primitive data types- call by value
//primitive, number, string, boolean,null,undefined

let a =10;
let b =a;
b=99;
console.log(a);
console.log(b);

//Objects- the reference value is copied , so bothe variables point to the same value
//Reference-objects ,arrays, functions
let obj1 = {val:10};
let obj2 = obj1;
obj2.val =99;
console.log(obj1.val);
