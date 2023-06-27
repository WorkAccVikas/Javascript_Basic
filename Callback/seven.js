// Todo : (A) : program that shows the delay in execution

// function greet() {
//   console.log("Hello world");
// }

// function sayName(name) {
//   console.log("Hello" + " " + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName("John");

// Todo : (B) : solution above using callback
function greet(name, myFunction) {
  console.log("Hello world (greet)");

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
}

// callback function
function sayName(name) {
  console.log("Hello (sayName)" + " " + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, "John", sayName);
