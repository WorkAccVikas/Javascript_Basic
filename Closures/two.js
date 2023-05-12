function add(a) {
  let c = 3;
  return function (b) {
    console.log(a, b, c);
    return a + b + c;
  };
}

// let r1 = add(1);
// let r2 = r1(2);
// console.log(r2);

function calc(a, b, c) {
  return {
    mul: function (d) {
      return a * b * c * d;
    },
    adddouble: function (e) {
      console.log(e);
      return (a + b + c) * e;
    },
  };
}

let r3 = calc(2, 4, 6);
console.log(r3.mul(5));
console.log(r3.adddouble(10));
