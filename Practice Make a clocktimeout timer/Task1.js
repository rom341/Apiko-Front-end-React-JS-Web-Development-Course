function isString(callback, str){
    if(typeof(str) != "string" || typeof(callback) != "function"){
        console.log("ERROR: wrong input format!");
        return;
    }
    callback(str);
}

function callbackExampleToLower(str){
    if(typeof(str)!="string"){
        console.log("ERROR: wrong callback input format!");
        return;
    }
    console.log(str.toLowerCase());
}

console.log("TASK 1");
const testData = "abABab";
isString(callbackExampleToLower, testData);