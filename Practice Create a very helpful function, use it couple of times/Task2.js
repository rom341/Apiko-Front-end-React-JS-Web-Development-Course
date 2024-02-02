const car = {
    name: "Tesla",
    model: "X",
};

function showCarInfo() {
    console.log(this.name + " : " + this.model);
}

var bindShowCarInfo = showCarInfo.bind(car);
bindShowCarInfo();