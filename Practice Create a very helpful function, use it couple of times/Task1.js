//Global scope
var example1 = 'example1';
function func1() {
    console.log(example1)
}
func1();


//Function scope
function func2(){
    var example2 = 'example2';
    console.log(example2);
}
func2();
//console.log(example2);


//Block scope
function func3(){
    var example3 = 'example3';
    console.log(example3);
}
func3();
//console.log(example3);