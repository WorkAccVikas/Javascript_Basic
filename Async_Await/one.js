// *: (1)
async function hello() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return 7;
}

function greet() {
  return "hello";
}

// *: working because async function
// hello()
//   .then((result) => {
//     console.log("hello result = ", result);
//   })
//   .catch((err) => {
//     console.log("hello err");
//   });

// !: not working because normal function
// greet()
//   .then((result) => {
//     console.log("greet result = ", result);
//   })
//   .catch((err) => {
//     console.log("greet err");
//   });

// *: (2) : here both promises run parallel, no await here
// async function whether() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("30 deg");
//     }, 3000);
//   });

//   let bangaloreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("44 deg");
//     }, 7000);
//   });

//   let x = await delhiWeather.then((result) => {
//     console.log("delhi weather = ", result);
//     return result;
//   });

//   let y = await bangaloreWeather;
//   console.log("bangalore weather = ", y);

//   return [x, y];
// }

// console.log("Welcome to Weather Control Room : ");
// let a = whether();
// console.log("Output of whether function = ", a);
// a.then((result) => {
//   console.log("Output of whether function in then = ", result);
//   console.log("Iterate in promise array");
//   result.forEach((e) => {
//     console.log(e);
//     console.log(`State = ${typeof e}`);
//     // promiseState(e).then((state) => console.log(state));     //?: Working
//     promiseState1(e).then((state) =>
//       console.log(state?.state, "==>", state?.value)
//     );
//   });
// }).catch((err) => {
//   console.log("Error of whether function in catch");
// });

function promiseState(p) {
  const t = {};
  return Promise.race([p, t]).then(
    (v) => (v === t ? "pending" : "fulfilled"),
    () => "rejected"
  );
}

function promiseState1(p) {
  const t = {};
  return Promise.race([p, t]).then(
    (v) => (v === t ? { state: "pending" } : { state: "fulfilled", value: v }),
    () => {
      state: "rejected";
    }
  );
}

// *: (3) : here use async and await with promises
async function weatherReport() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30 deg");
    }, 3000);
  });

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("44 deg");
    }, 7000);
  });

  console.log("Fetching Delhi Weather Please wait ...");
  let delhiW = await delhiWeather;
  console.log("Fetched Delhi Weather: " + delhiW);
  console.log("Fetching Bangalore Weather Please wait ...");
  let bangaloreW = await bangaloreWeather;
  console.log("Fetched Bangalore Weather: " + bangaloreW);
  return [delhiW, bangaloreW];
}

const usa_weatherReport = async () => {
  let newyorkWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("10 deg");
    }, 2000);
  });

  let laWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 deg");
    }, 10000);
  });

  console.log("Fetching New York Weather Please wait ...");
  let newyorkW = await newyorkWeather;
  console.log("Fetched New York Weather: " + newyorkW);
  console.log("Fetching LA Weather Please wait ...");
  let laW = await laWeather;
  console.log("Fetched LA Weather: " + laW);
  return [newyorkW, laW];
};

// * : here only 1 async function execute
// console.log("Welcome to the Control Room");
// let b = weatherReport();
// console.log("Output of whetherReport function = ", b);
// b.then((result) => {
//   console.log("Output of whetherReport function in then = ", result);
//   console.log("Iterate in promise array");
//   result.forEach((e) => console.log(e));
// });

// *: here 2 async function execute parallel : time = 10 sec
// console.log("Welcome to the Control Room");
// let c = weatherReport();
// console.log("Output of whetherReport function = ", c);
// let d = usa_weatherReport();
// console.log("Output of usa_weatherReport function = ", d);

// d.then((result) => {
//   console.log("Output of usa_weatherReport function in then = ", result);
//   console.log("usa_weatherReport : Iterate in promise array");
//   result.forEach((e) => console.log(e));
// });

// c.then((result) => {
//   console.log("Output of whetherReport function in then = ", result);
//   console.log("whetherReport : Iterate in promise array");
//   result.forEach((e) => console.log(e));
// });

// *: here 2 async function execute one by one : time = 17 sec (7 + 10)
const main = async () => {
  console.log("Welcome to the Control Room");
  console.log("Starting the weatherReport function");
  let c = await weatherReport();
  console.log("Output of whetherReport function = ", c);
  c.forEach((e) => {
    console.log("whetherReport : Iterate in promise array = ", e);
  });

  console.log("Starting the usa_weatherReport function");
  let d = await usa_weatherReport();
  console.log("Output of usa_weatherReport function = ", d);

  d.forEach((e) => {
    console.log("usa_weatherReport : Iterate in promise array = ", e);
  });
};

main();
