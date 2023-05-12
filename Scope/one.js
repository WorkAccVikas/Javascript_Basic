// Todo : Global Scope
var x = 100;
let y = 50;
let b = 70;
var a = 25;
const c1 = 1000;
const c2 = 2000;
// Todo : Block Scope
{
  console.log("In block scope Before");
  console.log("Value of x = ", x);
  console.log("Value of b = ", b);
  console.log("Value of a = ", a);
  console.log("Value of c2 = ", c2);
  let z = 22;
  var x = 200;
  let y = 51;
  b += 1;
  a += 2;
  const c1 = 3000;
  console.log("In block scope After");
  console.log("Value of c1 = ", c1);
  console.log("Value of z = ", z);
  console.log("Value of y = ", y);
  console.log("Value of x = ", x);
  console.log("Value of b = ", b);
  console.log("Value of a = ", a);
}

console.log("Outside of c1 = ", c1);
console.log("Outside of c2 = ", c2);
console.log("Outside x = ", x);
console.log("Outside y = ", y);
console.log("Outside a = ", a);
console.log("Outside b = ", b);
// console.log("Outside z = ", z); // ! : Error, z is in block scope

// Todo : Function Scope
function hello() {
  console.log("In Function scope Before");
  console.log("Value of c2 = ", c2);
  let w = 17;
  var x = 300;
  let y = 511;
  b += 1;
  a += 2;
  const c1 = 4000;
  console.log("In Function scope After");
  console.log("Value of c1 = ", c1);
  console.log("Value of w = ", w);
  console.log("Value of x = ", x);
  console.log("Value of y = ", y);
  console.log("Value of a = ", a);
  console.log("Value of b = ", b);
}

hello();

console.log("Outside of c1 = ", c1);
console.log("Outside of c2 = ", c2);
console.log("Outside x = ", x);
console.log("Outside y = ", y);
console.log("Outside a = ", a);
console.log("Outside b = ", b);
// console.log("Outside w = ", w); // ! : Error, w is in function scope
