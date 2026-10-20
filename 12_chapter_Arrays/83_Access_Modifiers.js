//Access Modifying
let statuses =["pass", "fail", "skip"];

console.log(statuses[0]);
console.log(statuses[2]);
console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-4));

//Modify
statuses[1]="blocked";
console.log(statuses);
console.log(statuses.length);
//Arrays length is fixed and can't add new values as the size of the same is fixed, in order to add new elements new arrays need to be created
