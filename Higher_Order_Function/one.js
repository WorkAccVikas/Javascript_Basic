// Todo : Higher Order Function

// * : (1)
// function hello() {
//   console.log("Hello");
// }
// setTimeout(hello, 3000);

// * : (2)
// let sal = [500, 20, 780, 60, 499, 1000, 300, 99, -99, -88, 0, -4, -99];
// console.log(sal.length);

// function removeNegative(e, i) {
//   // console.log(e, i);
//   return e > 0;
// }
// function doubleSalary(e, i) {
//   return e * 2;
// }
// let r2 = sal.filter(removeNegative).map(doubleSalary);
// console.log(r2);

function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("in add function");
      resolve(a + b);
    }, 5000);
  });
}

function addAll(...rest) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("in addAll function", rest.length);
      let sum = rest.reduce((total, element) => (total += element), 0);
      resolve(sum);
    }, 5000);
  });
}

const asyncHandler =
  (fun) =>
  async (...args) => {
    try {
      // console.log(args);
      let result = await fun(...args);
      console.log({ result });
      console.log("inner rest of code");

      return result;

      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     console.log("Return result", result);
      //     resolve(result);
      //   }, 5000);
      // });

      // return "Ram"; // * : working
    } catch (error) {
      console.log("Error: " + error);
    }
  };

// console.log(result1);

(async () => {
  let result1 = await asyncHandler(add);
  let result2 = await result1(10, 20);
  console.log("result2 = ", result2);
  console.log("Second Way");
  result1(10, 20)
    .then((result) => {
      console.log("In then = ", result);
    })
    .catch((err) => {
      console.log("In catch = ", err);
    });

  let r3 = await asyncHandler(addAll);
  let r4 = await r3(1, 2, 3, 4, 5);
  console.log("r4 = ", r4);
})();
