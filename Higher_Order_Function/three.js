let radius = [2, 3, 4, 1];

const area = (r) => {
  return Math.PI * r ** 2;
};
const circumference = (r) => {
  return 2 * Math.PI * r;
};
const diameter = (r) => {
  return 2 * r;
};

const calculate = (array, logic) => {
  let output = [];
  for (let index = 0; index < array.length; index++) {
    output.push(logic(array[index]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// Todo : This example use for callback
