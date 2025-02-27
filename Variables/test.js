{
  var a = 10; // in block scope
  console.log(a); // 10
}

console.log(a); // ! : ReferenceError: a is not defined
