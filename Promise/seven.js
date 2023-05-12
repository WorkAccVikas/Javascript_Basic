// Todo : Assignment
// const loadScript = async (src_url) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src_url;
//     script.onload = () => {
//       resolve(src_url + " Done Successfully");
//     };
//     document.head.appendChild(script);
//   });
// };

// * : using then catch
// let a = loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
// );

// a.then((result) => {
//   console.log("using thenc, result = " + result);
// }).catch((err) => {
//   console.log("using thenc, error = " + err);
// });

// * : using async await
// const main1 = async () => {
//   console.log("Start in millisecond = ", new Date().getMilliseconds());
//   let b = await loadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
//   );
//   console.log("End in millisecond = ", new Date().getMilliseconds());
//   console.log(b);
// };
// main1();

// * : after 3 seconds throw error and error must be handled in catch block

// let greet = async () => {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("Please this is not acceptable"));
//     }, 3000);
//   });
// };

// let main2 = async () => {
//   try {
//     let f = await greet();
//     console.log("Value of f = ", f);
//   } catch (error) {
//     console.log("Error handled");
//   }
// };

// main2();

// * :

let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
};
let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
};
let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};

// ? : time : 6 seconds, here all promises run in sequence
// const run = async () => {
//   try {
//     console.time("run");
//     let r1 = await p1();
//     console.log({ r1 });
//     let r2 = await p2();
//     console.log({ r2 });
//     let r3 = await p3();
//     console.log({ r3 });
//     console.timeEnd("run");
//   } catch (error) {
//     console.log("This is an error");
//   }
// };

// run();

// ? : time = 3 seconds , here all promises run in parallel
const run2 = async () => {
  try {
    console.time("run2");
    let r1 = p1(); // Fetch first 10 products from the database
    let r2 = p2(); // Fetch another 10 products from the database
    let r3 = p3(); // Fetch yet another 10 products from the database

    let result = await Promise.all([r1, r2, r3]);
    console.log(result);

    console.timeEnd("run2");
    return result;
  } catch (error) {
    console.log("This is an error");
  }
};

const run3 = async () => {
  let g = await run2();
  console.log("Value of g = ", g);
};

run3();
