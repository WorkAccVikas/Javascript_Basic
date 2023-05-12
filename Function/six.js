// Todo : Function Statement / Function Declaration
function f1() {
  console.log("Function Statement / Function Declaration");
}

f1();

// Todo : Function Expression
let f2 = function () {
  console.log("Function Expression");
};

f2();
// Todo : Named Function Expression
let f3 = function hello() {
  console.log("Named Function Expression");
};

f3();
// hello(); // ! : Error
// Todo : Anonymous Function
let f4 = function () {
  console.log("Anonymous Function");
};

f4();

let f5 = () => {
  console.log("Anonymous Function");
};

f5();
// Todo : First Class Function
// * : In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.
// * : For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener
const handler = () => console.log("First Class Function");
// document.addEventListener("click", handler);

// Todo : First Order Function
// * : doesn’t accept another function as an argument and doesn’t return a function as its return value.
const firstOrder = () => console.log("I am a first order function!");

// Todo : Higher Order Function
// * : that accepts another function as an argument or returns a function as a return value or both.
const firstOrderFunc = () => console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

// Todo :
