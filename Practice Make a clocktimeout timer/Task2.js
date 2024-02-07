function clock(){
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

console.log("TASK 2");
console.log("If you see nothing in this task, try to remove comments in code");
//setInterval(() => {console.log(clock())}, 1000);