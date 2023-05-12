// Todo : async/await with IIFE
const p1 = (text, second = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 1000 * second);
  });
};

(async () => {
  console.time("IIFE");
  let x = await p1("Sachin");
  console.log(x);
  let y = await p1("Virat");
  console.log(y);
  let z = await p1("Dhoni", 5);
  console.log(z)
  console.timeEnd("IIFE");
})();
