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
