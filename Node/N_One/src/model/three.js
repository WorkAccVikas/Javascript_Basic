const sub = (a, b) => {
  console.log("In sub function = ", a - b);
  return a - b;
};

const div = (a, b) => {
  console.log("In div function = ", a / b);
  return a / b;
};

export { sub, div }; // * : es6 way
// module.exports = { sub, div }; // ? : old way
