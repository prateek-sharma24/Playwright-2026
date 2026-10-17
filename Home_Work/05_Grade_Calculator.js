//Calculate the letter grade based on a numeric score. A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.
const prompt =require('prompt-sync')();
let num = Number (prompt(("Enter your score: ")));
//invalid data
    if(num>100 | num<0)
    {
        console.log("Invalid number");
    }
    else
    {
        if(num>90)
        {
            console.log("A")
        }
        else if(num>80 && num<90)
        {
            console.log("B");
        }
        else if(num>70 && num<80)
        {
            console.log("C");
        }
        else if(num>60 && num<70)
        {
            console.log("D");
        }
        else{
            console.log(F-Fail);
        }
    }
