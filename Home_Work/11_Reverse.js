// const prompt = require('prompt-sync')();
// let num = prompt("Enter number:").split(" ").map();
// num.reverse();
// console.log("Reverse of an array:",num);

const prompt = require('prompt-sync')();

const values = prompt('Enter values separated by spaces:').trim().split(/\s+/);
values.reverse();

console.log('Reversed array:', values);
