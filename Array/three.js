// * : 1. map
let arr1 = [10, 20, 30, 40];

let arr2 = arr1.map((value, index, array) => {
  console.log(`Index = ${index}, Value = ${value}, Array = ${array}`);
  return value + index;
});

console.log(arr2);

// * : 2. filter
let arr3 = [10, 50, 68, 5, 66, 21, 30, 11, 58, 12];

let arr4 = arr3.filter((value, index, array) => {
  return value < 30;
});

console.log(arr4);

// * : 3. reduce
let arr5 = [10, 20, 30, 40, 50];
const add = (x, y) => {
  return x + y;
};
let x = arr5.reduce(add);

console.log(x, "=", typeof x);
