
const prompt = require('prompt-sync')();

const values = prompt('Enter values separated by spaces:').trim().split(/\s+/);
values.reverse();

console.log('Reversed array:', values);
