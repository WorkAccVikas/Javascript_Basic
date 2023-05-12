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
// let c = init();
// c();

// Todo : (2) Nested Closures
function main1() {
  const x = (name) => {
    let a = 1;
    console.log("Function x : Value a = ", a);
    console.log("Function x : Value name = ", name);
    const y = () => {
      // let a = 2
      console.log("Function y : Value a = ", a);
      console.log("Function y : Value name = ", name);
      const z = () => {
        // let a = 3
        console.log("Function z : Value a = ", a);
        console.log("Function z : Value name = ", name);
        console.log("Function z : Value q = ", q);
      };
      z();
    };
    // a = 999;
    y();
  };
  return x;
}

let a = 50;
let q = 70;

let ab = main1();
console.log(ab);
let bc = ab("Joy");
console.log(bc);
