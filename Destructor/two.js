function sum(a, b, c) {
  return a + b + c;
}

let x = [1, 3, 5];
console.log(sum(...x));

function all_sum(...args) {
  console.log(args);
  let x = args.flat(Infinity);
  console.log(x);
  let t = 0;
  for (let i of x) t += i;
  console.log(t);
  return t;
}

let y = [10, 20, 30];
console.log(all_sum(y));
console.log(all_sum([12,22,123,45,33]));
