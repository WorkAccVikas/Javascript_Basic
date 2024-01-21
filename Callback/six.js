// TOPIC : Callback

function add(x, y, callback) {
  console.log("Add = ", x + y);
  callback(x + y, x * y);
}

function resultCard(value1, value2) {
  console.log("Result = ", value1, value2);
}

add(10, 20, resultCard);

// ################################################################################################################
// TOPIC : Promise

// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     resolve(x + y);
//   });
// }

// // or
// // async function add(x, y) {
// //   return x + y;
// // }

// function resultCard(r) {
//   console.log("Result = ", r);
// }

// (() => {
//   add(11, 22)
//     .then((r1) => resultCard(r1))
//     .then((r2) => console.log(r2));
// })();

// ################################################################################################################
// TOPIC  : Async/Await with fake delay

// async function add(x, y) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x + y);
//     }, 5000); // 5000 milliseconds delay (5 seconds)
//   });
// }

// function resultCard(r) {
//   console.log("Result = ", r);
// }

// (async () => {
//   const result = await add(11, 22);
//   resultCard(result);
// })();

// ################################################################################################################
