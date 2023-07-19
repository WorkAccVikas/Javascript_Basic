let input = "0";
// let input = "1a";
// let input = "1";

let x = parseInt(input);
let y = Number(input);

console.log("Value of x convert using parseInt = ", x);
console.log("Value of y convert using Number = ", y);
console.log("Value of !y = ", !y);
console.log("Value of !!y = ", !!y);

if (!y) {
  console.log(`Input = ${input} using !y = Bad`);
} else {
  console.log(`Input = ${input} using !y = Good`);
}

if (!!y) {
  console.log(`Input = ${input} using !!y = Bad`);
} else {
  console.log(`Input = ${input} using !!y = Good`);
}

if (isNaN(y)) {
  console.log(`Input = ${input} using isNaN = Bad`);
} else {
  console.log(`Input = ${input} using isNaN = Good`);
}
