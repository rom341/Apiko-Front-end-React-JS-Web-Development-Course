function unicFn(initialArray) {
    return Array.from(new Set(initialArray));
   }

var exampleArr = [2, 3, 1, 3, 3, 7];
console.log(unicFn(exampleArr));