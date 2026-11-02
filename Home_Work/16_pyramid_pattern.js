function main()
{
    for(let i=0;i<=4;i++)
    {
        for(let j=1;j<=9;j++)
        {
            if(j>=5-i && j<=5+i)
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
