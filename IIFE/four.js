var name = "Ram";
let city = "goa";
var status = "GM";

function hello() {
  let id = 0;
  console.log("In hello function = ", name); // * : Ram
  console.log("In hello function = ", id); // * : 0
  console.log("In hello function = ", city); // * : goa
  console.log("In hello function = ", status); // * : GM if line 11 is commented, otherwise undefined
  var status = "GA";
}
hello();

(() => {
  console.log("First IIFE = ", name); // * : Ram
  //   console.log("First IIFE = ", id); // ! : Error because id is let
  console.log("First IIFE = ", city); // * : goa
})();

(() => {
  let city = "pune";
  var name = "Jay";
  console.log("Second IIFE = ", name); // * : jay
  console.log("Second IIFE = ", city); // * : pune
})();

// * : script add in script scope
let script = (() => {
  var x = 5;
  var m = 56;
  const add = (y) => {
    return x + y;
  };
  return {
    addWith: add,
    x,
    valueOfM: m,
  };
})();

console.log(script);
console.log(script.x);
console.log(script.valueOfM);
console.log(script.addWith(568));

// * : script1 add in global scope
var script1 = (() => {
  var x = 4;
  var m = 78;
  const add = (y) => {
    return x + y;
  };
  return {
    addWith: add,
    x,
    valueOfM: m,
  };
})();

console.log(script1);
console.log(script1.x);
console.log(script1.valueOfM);
console.log(script1.addWith(10));
