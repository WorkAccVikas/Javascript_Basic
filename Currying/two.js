// Todo : fn(a,b,c) => fn(a)(b)(c)

function sum(x, y, z) {
  console.log("In sum fuction = ", x + y + z);
  return x + y + z;
}
function calculation(a) {
  console.log("In calculation function");
}

function curry(fn) {
  return function curriedFunc(...args) {
    // console.log(fn.length);
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

let x = curry(sum);
console.log(x(1)(2)(3));
