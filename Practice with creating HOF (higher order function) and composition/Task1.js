const modifyArray = (modifyCondition) => (data) => {
    var resultArray = [];
    for (let i = 0; i < data.length; i++) {
        resultArray.push(modifyCondition(data[i]));
    }
    return resultArray;
};

const compose = (...fncs) => (x) => {
    return fncs.reduceRight((acc, fn) => fn(acc), x);
};

const formatOutput = (outputArray, delimetr) => {
    const formattedResult = outputArray.join(delimetr);
    console.log(`Result: ${formattedResult} length: ${formattedResult.length}`);
};

const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
const allToLower = compose(modifyArray((str) => str.toLowerCase())); // use compose + modifyArray here
const capitalizeAllFirst = compose(modifyArray((str) => { return str[0].toUpperCase() + str.slice(1).toLowerCase() })) // use compose + modifyArray here

formatOutput(allToLower(testArray), "-");
formatOutput(capitalizeAllFirst(testArray), " - ");