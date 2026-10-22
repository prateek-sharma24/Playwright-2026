let num =[10,25,30,45];
let temp =num.find(temp=>temp>20)
//find will try to search for the first element in the array which matches the condition

//find index
let index =num.findIndex(n=>n>20);
console.log(index);

num.findLast(n=>n>20);//45
num.findLastIndex(n=>n>20);//3