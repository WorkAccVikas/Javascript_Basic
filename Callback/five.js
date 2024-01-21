console.log("Start");
setTimeout(() => {
  console.log("Callback");
}, 0);

console.log("Middle");

let endTime = new Date().getTime() + 5 * 1000;
while (new Date().getTime() < endTime) {}

console.log("End");
