// Todo : With Memoization
function calc(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

function add(x, y) {
  console.log("in add function = ");
  return x + y;
}

const memoization = (fun) => {
  let cache = {};
  return function (...args) {
    console.log("Start = ", cache);
    console.log(...args);
    let key;
    if (args.length > 1) {
      key = args.join("_");
    } else {
      key = JSON.stringify(...args);
    }
    // todo : or
    // let key = JSON.stringify(...args);
    console.log("key = ", key);
    if (!cache[key]) {
      console.log("First time");
      let result = fun.call(this, ...args);
      cache[key] = result;
      return result;
    }
    console.log("again");
    return cache[key];
  };
};

console.time("memoization");
const efficient = memoization(calc);
const result = efficient(500000);
console.log({ result });
console.timeEnd("memoization");

console.time("input 2");
const result1 = efficient(500000);
console.log({ result1 });
console.timeEnd("input 2");

console.time("input 3");
console.log(efficient(500000));
console.timeEnd("input 3");

let r1 = memoization(add);
const c1 = r1(10, 20);
console.log(c1);
const c2 = r1(10, 20);
console.log(c2);
