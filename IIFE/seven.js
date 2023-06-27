// Todo : async/await with IIFE
const p1 = (text, second = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 1000 * second);
  });
};

// Todo : Step by step Execution = 9 sec
// (async () => {
//   console.time("IIFE");
//   let x = await p1("Sachin");
//   console.log(x);
//   let y = await p1("Virat");
//   console.log(y);
//   let z = await p1("Dhoni", 5);
//   console.log(z);
//   console.timeEnd("IIFE");
// })();

// Todo : Parallel Execution = 5 sec
// (async () => {
//   console.time("IIFE with parallel execution");
//   let x1 = p1("Sachin parallel execution");
//   let y1 = p1("Virat parallel execution");
//   let z1 = p1("Dhoni parallel execution", 5);
//   let x = await x1;
//   console.log(x);
//   let y = await y1;
//   console.log(y);
//   let z = await z1;
//   console.log(z);
//   console.timeEnd("IIFE with parallel execution");
// })();

// Todo : Parallel Execution = 5 sec (using Promise.all([]))
(async () => {
  console.time("IIFE with parallel execution Promise.all([])");
  let result = await Promise.all([p1("karan"), p1("Ram"), p1("Gita", 5)]);

  console.log("Result = ", result);
  console.timeEnd("IIFE with parallel execution Promise.all([])");
})();
