class myClass{
    constructor(name){
        this.name = name;
        console.log(name + " created!");

        this.timerId = setTimeout(()=>{
            console.log(this.name + " is nulled now");
            this.name = null;
            this.timerId = null;
        }, 5000);
    }

    cancelNameNulling(){
        if(this.timerId === null){
            console.log("Timer is ended!");
            return;
        }
        clearTimeout(this.timerId);
        this.timerId = null;
        console.log("Timer of nulling is stopped successfully for " + this.name);
    }
}

console.log("Task 4");
const myClassVar1 = new myClass("object1");
const myClassVar2 = new myClass("object2");
myClassVar2.cancelNameNulling();