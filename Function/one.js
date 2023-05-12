function average(x, y) {
  return (x + y) / 2;
}
// arrow function
const arrowFunAverage = (m, n) => {
  return (m + n) / 2;
};

let a = 10;
let b = 25;
let c = 32;

console.log(`Average of a & b = ${average(a, b)}`);
console.log(`Average of b & c = ${average(b, c)}`);
console.log(`Average of a & c = ${arrowFunAverage(a, c)}`);
