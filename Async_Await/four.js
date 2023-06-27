function one() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("In one function");
      resolve(1);
      console.log("In one function finish");
      // reject("One Error");
    }, 3000);
  });
}

function two() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("In two function");
      resolve(2);
      // reject("Two Error");
      console.log("In two function finish");
    }, 6000);
  });
}

function three() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("In three function");
      resolve(3);
      console.log("In three function finish");
    }, 9000);
  });
}

//  * : time = 18 sec (one by one)
const loadData = async () => {
  try {
    console.time();
    const r1 = await one();
    console.log("After one = ", r1);
    const r2 = await two();
    console.log("After two = ", r2);
    const r3 = await three();
    console.log("After three = ", r3);
    console.timeEnd();
    return [r1, r2, r3];
  } catch (error) {
    console.log("Error: " + error);
  }
};

// (async () => {
//   try {
//     let x = await loadData();
//     console.log({ x });
//   } catch (error) {
//     console.log("Error Here");
//   }
// })();

// Todo : or
// loadData()
//   .then((data) => console.log("In then = ", data))
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// * : time = 9 sec (parallel)
const getData = async () => {
  try {
    console.time();
    // * : first way
    // let m1 = one();
    // let m2 = two();
    // let m3 = three();
    // let r1 = await m1;
    // let r2 = await m2;
    // let r3 = await m3;
    // const result = [r1, r2, r3];

    // * : second way
    const result = await Promise.all([one(), two(), three()]); // ? : return only values
    // const result = await Promise.allSettled([one(), two(), three()]);  // ? : return only object and values inside objects
    console.log({ result });
    console.timeEnd();
    console.log("Return Result");
    return result;
  } catch (error) {
    console.log("Error: getData = " + error);
  }
};

getData()
  .then((data) => console.log("In then block ", data))
  .catch((err) => console.log("In then catch ", err));
