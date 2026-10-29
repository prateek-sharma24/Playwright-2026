//Searching and checking
 let url ="https://staging.vwo.com/api/login?retry=true";

 //includes()-return a boolean value
 console.log(url.includes("staging"));
 console.log(url.includes("production"));

 //startWith /endWith
 console.log(url.startsWith("https"));
 console.log(url.startsWith("http://"));
 console.log(url.endsWith(true));

 //indexOf //lastIndexOf
 console.log(url.indexOf("a"));
 console.log(url.lastIndexOf("a"));
 console.log(url.indexOf("nothere"));//not present will be -1

 //ASCI ->A->65