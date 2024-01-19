// Todo : Once Function (Best)

function multiplyBy2(num) {
  return num * 2;
}

const once = (fn) => {
  let called = false;
  return function (...args) {
    if (called) return;
    called = true;
    return fn.apply(this, args);
  };
};

let r1 = once(multiplyBy2);
console.log("x = ", r1(10));
console.log("x = ", r1(20));

function add(x, y) {
  return x + y;
}

let r2 = once(add);
console.log("add = ", r2(1, 2));
console.log("add = ", r2(10, 20));
