// Todo : Promise
console.log("hello 1");
setTimeout(() => {
  console.log("hello 2 , after 3 seconds");
}, 3000);
console.log("hello 3");

let promise = new Promise(function (resolve, reject) {
  console.log("In Promise");
  resolve(100);
});

console.log(promise);
promise.then((result) => console.log({result}));
