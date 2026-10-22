let fruits =[];
console.log(typeof fruits); //the type is object for array

let browsers = ["chrome","firefox", "webkit"];
    console.log(browsers.length);
    console.log(browsers.at(0)); //chrome
    console.log(browsers[0]); //chrome
    console.log(browsers[-1]); //This will not work as this way it doesn't show negetive data, as this will give undefined and at() supports negetive index
    