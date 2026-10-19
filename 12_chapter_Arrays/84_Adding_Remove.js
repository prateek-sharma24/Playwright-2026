let arr =[1,2,3];
console.log(arr);

//add to the end
arr.push(4);
console.log(arr);

//Remove from the end
arr.pop();
console.log(arr);

// Adding multiple elements
arr.push(5,6)
console.log(arr);

//Add to the beginning
arr.unshift(8);
console.log(arr);

//Remove from the beginning
arr.shift();
console.log(arr);

//update the details, like replacing one with new element in the array
arr.splice(2,1);
console.log(arr);

arr.splice(2,0,99);//99 is adding
console.log(arr);

arr.splice(2,1,98);
console.log(arr);

arr.splice(1,2,97)
console.log(arr);

//[1,2,99,5,6]
arr.splice(1,2,10,20);
console.log(arr);//[1,10,20,5,6]



