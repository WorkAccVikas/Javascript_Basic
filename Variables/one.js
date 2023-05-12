console.log("Variables");

var a = "Ram";
// ? : you can redeclare var value
var a = 25;
let b = "Amit";
// ! : you can't redeclare let it will throw error
// let b = "Sumit";
//  ? : you can update value of let
b = "Pooja";

const c = "Jimmy";
// ! : can't redeclare const
// const c = "Order";
// ! : you can't declare const without initialization
// const c;
// ! : you can't update value of const
// c = "Nova";

console.log(c);

{
  var a = "Tom";
  let b = "Raj";
  console.log(a);
  console.log(b);
}
// Here, var variable changes value globally and internally also
console.log(a);
// Here, let variable redeclare in block it will not updated global value
console.log(b);
