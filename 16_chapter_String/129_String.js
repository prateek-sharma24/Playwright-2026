let url = "https://app.vwo.com";
let status ='pass';
let message ='Test completed in ${320}ms';
console.log(message);


//Single quotes
let a ='hello';

//Double quotes
let b = "Hello";

//template literals (backticks) -allows expresion and multline
let name1 ="prateek";
let msg =`Hello ${name1}! 2+2=${2+2}`;
console.log(msg);

//Multi-line
let report =`
Test:Login
Status:Pass
Duration:320ms
`;

console.log(String(200));
String(true);//"true"
String(null); //"null"
String([1,2]); //[1,2]