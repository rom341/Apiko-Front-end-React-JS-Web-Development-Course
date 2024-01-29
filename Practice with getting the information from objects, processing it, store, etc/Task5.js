function removeObj(arrayOfObj, keyName, value) {
    var result = [];
    for (element of arrayOfObj) {
        if (element[keyName] !== value)
            result.push(element);
    }
    return result;
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
console.log(removeObj(arr, "age", 2));
console.log(removeObj(arr, "year", 2));