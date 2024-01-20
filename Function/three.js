var x = 1;
var y = 10;

let a = 2;
let b = 20;

fun1();
console.log("After fun1 = ", x, y);  // * : 1 13
console.log("After fun1 = ", a, b);  // * : 2 24
fun2();
console.log("After fun2 = ", x, y);  // * : 1 18
console.log("After fun2 = ", a, b);  // * : 2 30

function fun1() {
  var x = 3;
  y = y + 3;
  let a = 4;
  b = b + 4;
  console.log("In fun1 = ", x, y);  // * : 3 13
  console.log("In fun1 = ", a, b);  // * : 4 24
}
function fun2() {
  var x = 5;
  y = y + 5;
  let a = 6;
  b = b + 6;
  console.log("In fun2 = ", x, y);  // * : 5 18
  console.log("In fun2 = ", a, b);  // * : 6 30
}
