let original =[1,2,3];
let copy1 =[...original];
console.log("Original before any action:",original);
// console.log(copy1);

let copy2 =original.slice();//new array is created
copy2.push(92);
copy1.push(91);
console.log("Spread:",copy1);
console.log("Slice:",copy2);
// Reference assignment
let alias = original;
alias.push(91);

console.log("Original:",original);
console.log("Alias:",alias);
