function outest() {
  var c = 10;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 50;
    return inner;
  }
  return outer;
}

let a = 100;
let r1 = outest()("Ram");
console.log("Rest");
r1();

// Todo : other way to write this
function outest1() {
  var c = 10;
  return function outer1(b) {
    return function () {
      console.log(a, b, c);
    };
  };
}
let r2 = outest1()("Geeta");
console.log("Rest1");
r2();
