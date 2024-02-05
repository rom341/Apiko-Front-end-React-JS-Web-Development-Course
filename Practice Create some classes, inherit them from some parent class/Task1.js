function Calculator(name){this.name = name;}

Calculator.prototype.sum = (a, b) => a + b;
Calculator.prototype.substract = (a, b) => a - b;

function AdvancedCalculator(name){this.name=name;}

AdvancedCalculator.prototype = Object.create(Calculator.prototype);
AdvancedCalculator.prototype.multiply = (a, b) => a * b;
AdvancedCalculator.prototype.divide = (a, b) => a / b;


console.log("TASK 1");
const a = 2, b = 4;
const ACalculator = new AdvancedCalculator("Calc1");
console.log(ACalculator.name);
console.log("A: " + a + " B: " + b);
console.log(ACalculator.sum(a, b));
console.log(ACalculator.substract(a, b));
console.log(ACalculator.multiply(a, b));
console.log(ACalculator.divide(a, b));