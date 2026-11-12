//Default Export -> Export One Main Thing, out of many atleast one can be imported directly without curly bracses

export default function log(message){//if default keyword is being used then curly braces should not be used

    console.log("[LOG]"+message);
}

export function logBetter(message) {
    console.log("-----------");
    console.log("[LOGS] " + message);
    console.log("-----------");
}

export function logBetter2(message) {
    console.log("-----------");
    console.log("[LOGS] " + message);
    console.log("-----------");
}