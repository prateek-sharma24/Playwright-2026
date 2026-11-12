// function getTestResults()
// {
//     return "Pass";
// }
// getTestResults.then(function(results){
//     console.log(results);
// });

async function testAPI()
{
    try
    {
        let result =await Promise.reject("503 Service Unavailable");
        console.log('Result',result);
    }catch(error){
        console.log('Error',error);
    } finally{
        console.log("Clean Up!");
    }
}
testAPI();