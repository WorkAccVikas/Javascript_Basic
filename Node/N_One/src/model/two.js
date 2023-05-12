const add = (a, b) => {
  console.log("In add function = ", a + b);
  return a + b;
};

const mul = (a, b) => {
  console.log("In mul function = ", a * b);
  return a * b;
};

export { add, mul }; // * : es6 way
// module.exports = { add, mul }; // ? : old way
