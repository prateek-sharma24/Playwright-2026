// Slice & Combining

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically 
// take from start to end.

console.log(arr.slice(1,3));
console.log(arr);
//when only start point is defined then elements after starting point will be added in the slice
console.log(arr.slice(2));
//positive indexes start from left to right
//negetive indexes start from right to left
console.log(arr.slice(-2));
//slice takes p;ace always from left to right only
console.log(arr.slice(-3));
//it will take all elements, if is 0
console.log(arr.slice(0));
console.log(arr.slice(-5));
console.log(arr.slice(-3,-5));//empty array appear as the slice works only from left to right and -3>-5

