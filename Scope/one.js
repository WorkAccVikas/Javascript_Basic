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
  // Todo : declare let
  let z = 22;
  // Todo : redeclare var
  var x = 200;
  // Todo : redeclare let
  let y = 51;
  b += 1;
  a += 2;
  const c1 = 3000;
  // var y = 999;  // ! : illegal shadowing => let to var (Cannot redeclare block-scoped variable y )
  // Todo : declare var
  var w = 999;

  console.log("In block scope After");
  console.log("Value of c1 = ", c1);
  console.log("Value of z = ", z);
  console.log("Value of y = ", y);
  console.log("Value of x = ", x);
  console.log("Value of b = ", b);
  console.log("Value of a = ", a);
  console.log("Value of w = ", w);
}

console.log("Outside of c1 = ", c1);
console.log("Outside of c2 = ", c2);
console.log("Outside x = ", x);
console.log("Outside y = ", y);
console.log("Outside a = ", a);
console.log("Outside b = ", b);
console.log("Outside w = ", w);
// console.log("Outside z = ", z); // ! : Error, z is in block scope (z is not defined)

/** NOTE : In block scope :
 *  - var :
 *      - redeclare means outside change ✅
 *      - new declare means outside access ✅
 *
 *  - let/const :
 *      - redeclare means outside not change ❌
 *      - new declare means outside not access (Error : is not defined) 🧧
 */

// Todo : Function Scope
function hello() {
  console.log("In Function scope Before");
  console.log("Value of c2 = ", c2);
  // Todo : declare let
  let w1 = 17;
  // Todo : redeclare var
  var x = 300;
  // Todo : redeclare let
  let y = 511;
  b += 1;
  a += 2;
  const c1 = 4000;
  // Todo : declare var
  var p = 888;
  console.log("In Function scope After");
  console.log("Value of c1 = ", c1);
  console.log("Value of w1 = ", w1);
  console.log("Value of x = ", x);
  console.log("Value of y = ", y);
  console.log("Value of a = ", a);
  console.log("Value of b = ", b);
  console.log("Value of p = ", p);
}

hello();

console.log("Outside of c1 = ", c1);
console.log("Outside of c2 = ", c2);
console.log("Outside x = ", x);
console.log("Outside y = ", y);
console.log("Outside a = ", a);
console.log("Outside b = ", b);
// console.log("Outside p = ", p); // ! : Error, p is not defined
// console.log("Outside w1 = ", w1); // ! : Error, w1 is in function scope / is not defined

/** NOTE : In function scope :
 *  - var :
 *      - redeclare means outside change ❌
 *      - new declare means outside not access (Error : is not defined) 🧧
 *
 *  - let/const :
 *      - redeclare means outside not change ❌
 *      - new declare means outside not access (Error : is not defined) 🧧
 */