function timer(s){
    const timerId = setInterval(()=>{
        if(s < 0){
            clearInterval(timerId);
            return;
        }

        console.log("Timer: " + s--)
    }, 1000);
}

console.log("Task 3");
console.log("If you see nothing in this task, try to remove comments in code");
const startTimerTime = 10;
//timer(startTimerTime);