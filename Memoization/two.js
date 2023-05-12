// Todo : With Memoization
function calc(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

const memoization = (fun) => {
  let cache = {};
  return function (...args) {
    console.log("Start = ", cache);
    let input = args[0];
    console.log({ input });
    if (input in cache) {
      // console.log("return from cache", cache);
      return cache[input];
    } else {
      // console.log("first time", cache);
      let result = fun(input);
      cache[input] = result;
      return result;
    }
  };
};

console.time("memoization");
const efficient = memoization(calc);
const result = efficient(500000);
console.log(result);
console.timeEnd("memoization");

console.time("input 2");
console.log(efficient(500000));
console.timeEnd("input 2");

console.time("input 3");
console.log(efficient(500000));
console.timeEnd("input 3");
