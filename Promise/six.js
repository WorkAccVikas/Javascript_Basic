// Todo : Promise API

// *: 1. Promise.all

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("In p1");
    resolve("value 1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("In p2");
    resolve("value 2");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("In p3");
    resolve("value 3");
  }, 3000);
});

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("In p4");
    reject(new Error("Error in p4"));
  }, 4000);
});

let p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("In p5");
    reject(new Error("Error in p5"));
  }, 1000);
});

// let promise_all = Promise.all([p5, p2, p3]);  // ! : in catch block : p5 rejected
// let promise_all = Promise.all([p1, p2, p3]);  // * : in then block : all promises resolved

// console.log("Promise.all");

// promise_all
//   .then((result) => {
//     console.log("promise_all result : ", result);
//     console.log(typeof result);
//     console.log("promise_all : Iterating in result array");
//     result.forEach((e) => console.log(e));
//   })
//   .catch((err) => {
//     console.log("promise_all : Error in catch");
//   });

// *: 2. Promise.allSettled
// let promise_all_settled = Promise.allSettled([p1, p2, p3]); // * all promises resolved : execute then block
// let promise_all_settled = Promise.allSettled([p1, p2, p4]); // * : here p4 is rejected => execute then block
// let promise_all_settled = Promise.allSettled([p5, p4]); // * : here p4,p5 are rejected => execute then block

// console.log("Promise.allSettled");

// promise_all_settled
//   .then((result) => {
//     console.log("promise_all_settled result : ", result);
//     console.log(typeof result);
//     console.log("promise_all_settled : Iterating in result array");
//     result.forEach((e) =>
//       console.log(
//         `Status = ${e.status} => Value = ${e?.value} => Reason = ${e?.reason}`
//       )
//     );
//   })
//   .catch((err) => {
//     console.log("promise_all_settled : Error in catch : ", err);
//   });

// *: 3. Promise.race
// let promise_race = Promise.race([p5, p2, p3]);    // ! : in catch because p5 is rejected
// let promise_race = Promise.race([p3, p2, p1]); // * : in then because all promises resolved ,return single value (fastest result) ,here p1

// console.log("Promise.race");

// promise_race
//   .then((result) => {
//     console.log("promise_race result : ", result);
//   })
//   .catch((err) => {
//     console.log("promise_race : Error in catch");
//   });

// *: 4. Promise.any
// let promise_any = Promise.any([p1, p2, p3]); // * : here p1 value is resolved first => in then ,return single value (fastest result) ,here p1
// let promise_any = Promise.any([p5, p2, p3]); // * : here p5 is rejected => p2 value is resolved because first resolved
// let promise_any = Promise.any([p5, p4]); // ! : here p4,p5 are rejected => execute catch block

// console.log("Promise.any");

// promise_any
//   .then((result) => {
//     console.log("promise_any result : ", result);
//   })
//   .catch((err) => {
//     console.log("promise_any : Error in catch : ", err);
//   });

// *: 5. Promise.resolve
// let promise_resolve = Promise.resolve(60); // * : then block
// let promise_resolve = Promise.resolve(p1);   // * : then block
// let promise_resolve = Promise.resolve(p5); // ! : here p5 is rejected => execute catch block

// console.log("Promise.resolve");

// promise_resolve
//   .then((result) => {
//     console.log("promise_resolve result : ", result);
//   })
//   .catch((err) => {
//     console.log("promise_resolve : Error in catch : ", err);
//   });

// *: 6. Promise.reject
// let promise_reject = Promise.reject(new Error("Hey client error here")); // ! : execute catch block with error
// let promise_reject = Promise.reject(p5); // ! : execute catch block here return Promise object

// console.log("Promise.reject");

// promise_reject
//   .then((result) => {
//     console.log("promise_reject result : ", result);
//   })
//   .catch((err) => {
//     console.log("promise_reject : Error in catch : ", err);
//   });
