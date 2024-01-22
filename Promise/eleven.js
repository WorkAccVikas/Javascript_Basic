// TOPIC : Finally block

const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
};

const h1 = async () => {
  await delay(5);
  return 11;
};

function h2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(111);
      reject("Error ala ahe");
    }, 2000);
  });
}

// POINT : .then.catch.finally using promise chain
// h2()
//   .then((r1) => {
//     console.log("Then = ", r1);
//   })
//   .catch((err) => {
//     console.log("Error = ", err);
//   })
//   .finally((r2) => {
//     console.log("Finally = ", r2);
//   });

// POINT : try catch finally using async/await
async function main() {
  try {
    const result1 = await h2();
    console.log("Result = ", result1);
  } catch (error) {
    console.log("Error = ", error);
  } finally {
    console.log("Finally block");
  }
}

main();
