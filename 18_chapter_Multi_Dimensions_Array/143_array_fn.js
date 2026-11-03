let scores =[
    [86,90,78],
    [60,45,70],
    [95,88,92]
];
//Matrix-rows and columns are almost equal
let rowsSum= scores.map(row=>row.reduce((a,b) => a+b));
console.log(rowsSum);
