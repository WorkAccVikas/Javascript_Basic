// Todo : (1) Simple Example
function init() {
  var name = "Virat"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  name = "Sachin"; // * : if this line is commented then Virat returns otherwise Sachin will returns
  return displayName;
}
let c1 = init();
c1();

// Todo : (2) Nested Closures
function main1() {
  const x = (name) => {
    let a = 1;
    let b = 2;
    c = c * 0.01;
    var m = 110;
    console.log("Function x : Value a = ", a);
    console.log("Function x : Value b = ", b);
    console.log("Function x : Value c = ", c);
    console.log("Function x : Value d = ", d);
    console.log("Function x : Value name = ", name);
    console.log("Function x : Value m = ", m);
    const y = () => {
      // let a = 2
      console.log("Function y : Value a = ", a);
      console.log("Function y : Value b = ", b);
      console.log("Function y : Value c = ", c);
      console.log("Function y : Value d = ", d);
      console.log("Function y : Value name = ", name);
      const z = () => {
        let c = 3;
        console.log("Function z : Value a = ", a);
        console.log("Function z : Value b = ", b);
        console.log("Function z : Value c = ", c);
        console.log("Function z : Value d = ", d);
        console.log("Function z : Value name = ", name);
      };
      z();
    };
    b = 999;
    d = 888;
    y();
  };
  return x;
}

let a = 10;
let b = 20;
let c = 30;
let d = 40;

var m = 11;
var n = 22;

let ab = main1();
console.log(ab);
let bc = ab("Joy");
console.log(bc);

function xyz() {
  let a1 = 1;
  var a2 = 2;
  a3 = 3; //  ! : It will add in global scope
  console.log(a1, a2, a3);
}
xyz();
console.log(a3); // * : Output printed on console because a3 add in global scope
