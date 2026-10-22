let num = [10,1,21,2];
num.sort((a,b)=>a-b);
console.log(num);
// Sort in descending order
num.sort((a,b)=>b-a)
console.log(num);
//sorting of a string in an array
let char=['d','f','t','y','a'];
char.sort((a,b) => a.localeCompare(b));
console.log(char);
//reverse of a string
char.sort((a,b)=>b.localeCompare(a));
console.log(char);