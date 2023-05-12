// Todo : Without Memoization
function calc(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

console.time("calc");
let res1 = calc(5000000);
console.log({ res1 });
console.timeEnd("calc");

// * : time = 76 sec
