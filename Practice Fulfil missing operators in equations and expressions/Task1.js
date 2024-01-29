function printPowsOf2(number){
    console.log("Input: " + number);
    if(typeof(number) !== "number"){
        console.log("incorect number!");
        return;
    }
    let multiplier = 0;
    let current = 1;
    while(current <= number)
    {
        console.log(current);
        current = Math.pow(2, multiplier++);
    }
}

console.log("Task1")
printPowsOf2(64);
printPowsOf2(null);
printPowsOf2('Hello!');
console.log();