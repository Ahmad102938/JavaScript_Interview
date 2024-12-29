//Variable Hoisting (var, let and const)

console.log(a);
var a = 5;
//output will be undefined

console.log(b);
let b = 5;
//output:- ReferenceError: Cannot access 'b' before initialization

console.log(c);
const c = 5;
//output:- ReferenceError: Cannot access 'b' before initialization

//Function Hoisting (Declaration and Expression)

//(function decleration)
test(); //output:- hello world
function test() {
    console.log("hello world");
}

//(function expression)
test1(); //TypeError: test1 is not a function
var test1 = function() {
    console.log("hello world");
}

//Class Hoisting
const obj = new MyObject(); // ReferenceError:- cannot access "<className>" before initializrin;
class MyObject {
    constructor() {
        this.name = "my object is empty";
    }
}