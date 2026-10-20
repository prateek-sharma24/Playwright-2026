let test =['login','checkout','search'];

for(let i=0;i<test.length;i++)
{
    console.log(i,test[i]);
}
console.log('------------------------------------');
//for...of (cleanest for values)
for(let x of test)
{
    console.log(test)//value
}
console.log('------------------------------------');
console.log( " -------forEach Below -----------------");

// forEach (no return value)
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});

console.log( " ------------------------");


// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}


let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in 