// let

// #1 :
// {
//   let a = 10; // in block scope
//   console.log(a); // 10
// }

// console.log(a); // ! : ReferenceError: a is not defined

// #2 :
// let a = 111; // in script scope

// {
//   let a = 10; // in block scope
//   console.log(a); // 10
// }

// console.log(a); // 111

// #3 :
// function fn() {
//   let a = 10; // in function scope
//   console.log(a); // 10
// }

// fn();

// console.log(a); // ! : ReferenceError: a is not defined (because a is in function scope)

// #4 :

// let a = 111; // in script scope

// function fn() {
//   console.log(a); // ! : ReferenceError: Cannot access 'a' before initialization
//   let a = 10; // in function scope
//   console.log(a); // 10
// }

// fn();

// console.log(a); // 111

// #5 :

let a = 111; // in script scope

function fn() {
  console.log(a); // 111
  a = 10; // overwrite a in script scope
  console.log(a); // 10
}

fn();

console.log(a); // 10
