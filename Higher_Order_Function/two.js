// Todo : In this example we will repeat same logic repeated 
// Todo : solution is see three.js

let radius = [2, 3, 4, 1];

const calculateArea = (array) => {
  let output = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    output.push(Math.PI * array[index] ** 2);
  }
  return output;
};

console.log(calculateArea(radius));

const calculateCircumference = (array) => {
  let output = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    output.push(2 * Math.PI * array[index]);
  }
  return output;
};

console.log(calculateCircumference(radius));
const calculateDiameter = (array) => {
  let output = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    output.push(2 * array[index]);
  }
  return output;
};

console.log(calculateDiameter(radius));
