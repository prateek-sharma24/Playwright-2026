console.log(greeting); // ReferenceError: greeting is in the temporal dead zone
// Unlike `var`, `let` is not initialized until its declaration is evaluated.
let greeting = "Hello";
console.log(greeting);
