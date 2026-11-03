function main()
{
    for(let i=0;i<=5;i++)
    {
        for(let j=0;j<=9;j++)
        {
            if(j>=6-i && j<=4+i)
            {
                process.stdout.write("*");
            }
            else
            {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}
main();