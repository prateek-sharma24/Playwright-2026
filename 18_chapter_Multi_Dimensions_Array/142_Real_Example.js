let testMtarix =[
    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",180]

];
for(let i=0;i<testMtarix.length;i++)
{
    for(let j=0;j<testMtarix[i].length;j++)
    {
        process.stdout.write(testMtarix[i][j]+" ");//console without a new line
    }
    console.log("");//it will print without a new line
}
