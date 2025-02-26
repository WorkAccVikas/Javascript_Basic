// var

// #1 :
{
  var a = 10; // in global scope
  console.log(a); // 10
}

console.log(a); // 10

// #2 :
var a = 111; // in global scope

{
  var a = 10; // redeclaration means overwrite a in global scope
  console.log(a); // 10
}

console.log(a); // 10

// #3 :
function fn() {
  var a = 10; // in function scope
  console.log(a); // 10
}

fn();

console.log(a); // ! : ReferenceError: a is not defined (because a is in function scope)

// #4 :

var a = 111; // in global scope

function fn() {
  console.log(a); // undefined
  var a = 10; // in function scope
  console.log(a); // 10
}

fn();

console.log(a); // 111

// #5 :

var a = 111; // in global scope

function fn() {
  console.log(a); // 111
  a = 10; // overwrite global scope
  console.log(a); // 10
}

fn();

console.log(a); // 10
