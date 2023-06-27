let arr = [-5, -2, -1, -4, -6, 5, 8, 9];

// Todo : filter all negative number
const x1 = arr.filter((e) => e < 0);
console.log(x1);

// Todo : count total negative number in array
const countNegatives = arr.reduce((acc, curr) => {
  return curr < 0 ? acc + 1 : acc;
}, 0);

console.log(countNegatives);

const arr1 = [-10, 5, 20, -15, 8];

// Todo : find max number from array
const max = arr1.reduce((acc, curr) => {
  console.log(`${curr} => ${acc}`);
  return curr > acc ? curr : acc;
}, arr1[0]);

console.log(max);

// Todo : find min number from array
const min = arr1.reduce((acc, curr) => {
  return curr < acc ? curr : acc;
}, arr1[0]);

console.log(min);

let arr2 = [1, 2, 3, 4];

let sum = arr2.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
