let results =['pass','fail','pass1','error','fail'];
results.indexOf('fail'); //1
results.indexOf('skip'); //-1- as this is not present in the array

//last index -searches from the end 
results.lastIndexOf('fail');//4

//includes -returns boolean
results.includes('error');//true