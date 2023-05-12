var x = 1;
var y = 10;

let a = 2;
let b = 20;

fun1();
console.log("After fun1 = ", x, y);
console.log("After fun1 = ", a, b);
fun2();
console.log("After fun2 = ", x, y);
console.log("After fun2 = ", a, b);

function fun1() {
  var x = 3;
  y = y + 3;
  let a = 4;
  b = b + 4;
  console.log("In fun1 = ", x, y);
  console.log("In fun1 = ", a, b);
}
function fun2() {
  var x = 5;
  y = y + 5;
  let a = 6;
  b = b + 6;
  console.log("In fun2 = ", x, y);
  console.log("In fun2 = ", a, b);
}
