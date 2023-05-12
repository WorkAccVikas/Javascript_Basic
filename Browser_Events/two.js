let button1 = document.getElementById("btn1");

let firstFunction = (e) => {
  console.log("First Function = ", e.target.value);
  console.log(e);
  console.log(e.target);
  console.log(e.target.value);
};
let secondFunction = (e) => {
  console.log("Second Function = ", e.target.value);
};
// *: add eventListener
button1.addEventListener("click", firstFunction);

let button2 = document.getElementById("btn2");

button2.addEventListener("click", secondFunction);

// *: remove eventListener
let a = prompt("What is your favorite number?");

if (a == "2") {
  button2.removeEventListener("click", secondFunction);
}
