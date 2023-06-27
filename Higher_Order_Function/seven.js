function delayedExecution(funcName, time) {
  return function (...args) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = funcName(...args); // Assuming the function is a global function
        resolve(result);
      }, time);
    });
  };
}

function add(a, b, c) {
  console.log("In add", a, b, c);
  return a + b + c;
}

// Sample function
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

// Creating a delayed version of the 'greet' function
const delayedGreet = delayedExecution(greet, 2000); // 2000 milliseconds (2 seconds)

// Calling the delayed function
delayedGreet("John"); // After 2 seconds, it will log "Hello, John!" and return "Hello, John!"

const delayedAdd = delayedExecution(add, 7000); // 2000 milliseconds (2 seconds)
delayedAdd(1, 2, 3);

(async () => {
  const delayedAdd = delayedExecution(add, 4000); // 2000 milliseconds (2 seconds)
  let r1 = await delayedAdd(11, 2, 3);
  console.log({ r1 });
})();
