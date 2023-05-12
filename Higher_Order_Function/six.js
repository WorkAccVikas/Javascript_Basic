const asyncHandler =
  (fn) =>
  async (...args) => {
    try {
      let result = await fn(...args);
      console.log(result);
      return result;
    } catch (error) {
      console.log("Error : ", error);
    }
  };

function hello(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

function greet(x, y, z) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x * y * z);
    }, 5000);
  });
}

let r1 = asyncHandler(hello);
console.log(r1);
// let r2 = r1(10, 20);
// console.log(r2);

r1(10, 20).then((data) => {
  console.log("data = ", data);
});
