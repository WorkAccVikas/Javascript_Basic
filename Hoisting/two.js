// console.log(x); // ! : Error can't access before initialization
console.log(y); // ? undefined
hello();
console.log(hello);

let x = 5;
var y = 10;

function hello() {
  console.log("hello function");
}
console.log(x);
