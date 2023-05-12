// Todo : Promise with then and catch

let p1 = new Promise((resolve, reject) => {
  console.log("p1 promise is pending");
  setTimeout(() => {
    console.log("p1 I am promise and I am resolved");
    resolve(true);
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("p2 promise is pending");
  setTimeout(() => {
    console.log("p2 I am promise and I am rejected");
    reject(new Error("I am an error"));
  }, 5000);
});

// console.log(p1, p2);

p1.then((result) => {
  console.log("p1 resolved in thenc : ", result);
}).catch((err) => {
  //   console.log("some error occurred at p1 : ", err);
  console.log("some error occurred at p1 = ", err);
});

// *: 1st way
// p2.then((result) => {
//   console.log("p2 resolved in thenc : ", result);
// }).catch((err) => {
//   //   console.log("some error occurred at p2 : ", err);
//   console.log("some error occurred at p2");
// });

// *: 2nd way
p2.then(
  (result) => {
    console.log("p2 resolved in thenc : ", result);
  },
  (error) => {
    console.log("some error occurred at p2.");
  }
);
