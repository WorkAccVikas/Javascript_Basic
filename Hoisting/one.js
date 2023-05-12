console.log(z, y);
// console.log(a); // ! : Error can't access before initialization
// console.log(b); // ! : Error can't access before initialization

var z;
var y = 100;
let a = 12;
const b = 55;
console.log(z, y, a, b);

hello();
function hello() {
  console.log("hello function");
}
