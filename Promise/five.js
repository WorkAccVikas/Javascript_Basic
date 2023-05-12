// Todo : Attaching Multiple Handlers to a Promise

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

p1.then((value) => {
  console.log("Hurray value = ", { value });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 6000);
  });
})
  .then((value) => {
    console.log("Promise 2 value = ", { value });
  })
  .then(() => {
    console.log("Congratulations after promise2 printed value");
  });

// p1.then(() => {
//   console.log("Congratulations this promise is now resolved");
// });
