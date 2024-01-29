function isEvenArray(initialArray) {
    return initialArray.every(function(element){
        return element % 2 == 0;
    })
   }

var exampleArr = [2, 4, 6, 2, 6];
console.log(isEvenArray(exampleArr));