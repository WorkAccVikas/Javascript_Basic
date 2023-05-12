// const sum = (a, b, c) => {
//   console.log("Sum Running", a + b + c);
//   return a + b + c;
// };

// setTimeout(sum, 5000, 10, 20, 30);

// let x = setTimeout(sum, 5000, 10, 20, 30);
// console.log("x = ", x);

// let a = setTimeout(function () {
//   alert("I am inside of settimeout");
// }, 5000);

// let b = prompt("Do you want to run the settimout?");
// if ("n" == b) {
//   clearTimeout(a);
// }
// console.log(a);

// const sumInterval = (a, b, c) => {
//   console.log("Sum Running", a + b + c);
//   return a + b + c;
// };

// // setInterval(sumInterval, 5000, 1, 2, 3);

// let c = setInterval(sumInterval, 5000, 1, 2, 3);

// let d = prompt("Do you want to run the setInterval?");

// if ("n" == d) {
//   clearInterval(c);
// }
// console.log(c);

// Todo : program to display a text using setInterval method
// function greet() {
//     console.log('Hello world');
// }

// setInterval(greet, 1000);

// *: setInterval run 3 times
// var i = 0;
// var timer = setInterval(function () {
//   console.log(++i);
//   if (i === 3) clearInterval(timer);
//   console.log("post-interval"); //this will still run after clearing
// }, 200);

// function Start() {
//   //prompts,does validation and then setsinterval as so
//   (function () {
//     callback = function () {
//       //declares numbers
//       var x = prompt("user enters a number between 1 to 9.", "0");
//       console.log(Number.parseInt(x));
//     };
//     callback();
//     window.setInterval(callback, 3000);
//   })();
// }

// Start();

// let i = 0;
// const printStatement = () => {
//   let n1 = Number.parseInt(prompt("user enters a number between 1 to 9.", "0"));
//   console.log("i = ", ++i);
//   console.log("User Input = ", n1);
//   if (i === 3 || n1 === 100) {
//     clearInterval(x1);
//   }
// };
// let x1 = setInterval(printStatement, 3000);
// console.log({x1})

// console.log("End");

// Todo: I want to restart setInterval function after clearInterval in javascript

// var ppp = document.getElementById("pp");
// console.log(ppp);
// var timer = setInterval(Func, 250);
// var seconds = 0;

// function Func() {
//   ppp.innerText = seconds++;
//   if (seconds == 10) {
//     clearInterval(timer);
//     restart();
//   }
// }

// function restart() {
//   seconds = 0;
//   timer = setInterval(Func, 250);
// }

// Todo : Javascript how to clear interval after specific time

var i = setInterval(FunctionA, 1000);
setTimeout(function () {
  clearInterval(i);
}, 5000);

function FunctionA() {
  console.log("In FunctionA");
}

(function display() {
  console.log("end here");
})();
