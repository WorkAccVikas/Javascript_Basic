let hello = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
};

// Todo : with IIFE
(async () => {
  console.time("without IIFE");
  let x1 = await hello();
  console.log(x1);
  let x2 = await hello();
  console.log(x2);
  let x3 = await hello();
  console.log(x3);
  console.timeEnd("without IIFE");
})();

// Todo : Without IIFE
// const main1 = async () => {
//   console.time("without IIFE");
//   let x1 = await hello();
//   console.log(x1);
//   let x2 = await hello();
//   console.log(x2);
//   let x3 = await hello();
//   console.log(x3);
//   console.timeEnd("without IIFE");
//   return [x1, x2, x3];
// };

// main1()
//   .then((result) => {
//     console.log({ result });
//   })
//   .catch((err) => {
//     console.log("Error");
//   });
