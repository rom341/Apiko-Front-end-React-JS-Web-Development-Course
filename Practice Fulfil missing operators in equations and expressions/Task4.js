function calculateWordsInString(string) {
    console.log("Input: " + string);
    let count = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ' && string[i + 1] !== ' ')
            count++;
    }
    console.log(count);
}


console.log("Task4");
calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
console.log();