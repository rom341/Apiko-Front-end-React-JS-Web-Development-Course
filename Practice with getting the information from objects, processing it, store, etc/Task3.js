function filterArray(initialArray) {
    var result = [];
    for (element of initialArray) {
        if (typeof element === "string") {
            result.push(element);
        }
    }
    return result;
}

var exampleArr = ["UNO", 21, "CHESs", true];
console.log(filterArray(exampleArr));