// Todo : Promise Chaining .then() calls
let p1 = new Promise((resolve, reject) => {
  console.log("In p1 promise");
  setTimeout(() => {
    console.log("In p1 promise resolved after 2 seconds");
    resolve(10);
  }, 2000);
});

// *: 1st way
// p1.then((result) => {
//   console.log("p1 resolved value = ", result);
//   let p2 = new Promise((resolve, reject) => {
//     console.log("In p2 promise");
//     setTimeout(() => {
//       console.log("In p2 promise resolved after 3 seconds");
//       resolve(20);
//     }, 3000);
//   });
//   return p2;
// })
//   .then((result2) => {
//     console.log("p2 resolved value = ", result2);
//     return 30;
//   })
//   .then((result3) => {
//     console.log("resolved value after p2 = ", result3);
//   });

// *: 2nd way
p1.then((result) => {
  console.log("p1 resolved value = ", result);
  return new Promise((resolve, reject) => {
    console.log("In p2 promise");
    setTimeout(() => {
      console.log("In p2 promise resolved after 3 seconds");
      resolve(20);
    }, 3000);
  });
})
  .then((result2) => {
    console.log("p2 resolved value = ", result2);
    return 30;
  })
  .then((result3) => {
    console.log("resolved value after p2 = ", result3);
  });
