function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

class TodoItem {
    constructor(name) {
        this.id = generateId();
        this.name = name;
        this._checked = false;
    }

    get checked() { return this._checked; }
    set checked(value) {
        if (typeof (value) !== "boolean") {
            return;
        }
        this._checked = value;
    }
}

class TodoList {
    constructor(name) {
        this.id = generateId();
        this.name = name;
        this.items = [];
    }

    addItem(...items) {
        items.forEach(item => {
            if (item instanceof TodoItem) {
                this.items.push(item);
            }
        });
    }

    removeItemByIndex(index) {
        if(typeof(index) != "number") return;
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }

    getItemByIndex(index) {
        if(typeof(index) == "number")
            return this.items[index];
    }
}

console.log("TASK 2");

const ToDoListObj = new TodoList("TDL1");
ToDoListObj.addItem(
    new TodoItem("TDI1"),
    new TodoItem("TDI2"),
    new TodoItem("TDI3"),
    new TodoItem("TDI4"),
);

console.log(ToDoListObj.items);

ToDoListObj.items[0].checked = true;
console.log(ToDoListObj.items);

ToDoListObj.removeItemByIndex(0);
ToDoListObj.removeItemByIndex(1);
console.log(ToDoListObj.items);

console.log(ToDoListObj.getItemByIndex(0));
