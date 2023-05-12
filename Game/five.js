let boxs = document.getElementById("box");
let user = prompt("ENTER NAME OF THE PERSON YOU WANT TO HACK:");
const hackerman = async () => {
  let a = new Promise((resolve, reject) => {
    setTimeout(() => {
      boxs.innerHTML = "<p>FETCHING DATA FROM SERVERS.....<p>";
      resolve("FETCHING DATA FROM SERVERS.....");
    }, 3000);
  });
  let b = new Promise((resolve, reject) => {
    setTimeout(() => {
      boxs.innerHTML += `<p>CONNECTING TO INSTAGRAM....<p>`;
      resolve("CONNECTING TO INSTAGRAM.....");
    }, 5000);
  });
  let c = new Promise((resolve, reject) => {
    setTimeout(() => {
      boxs.innerHTML += `<p>GETTING DATA OF ${user}.....<p>`;
      resolve("GETTING DATA OF " + user + ".....");
    }, 7000);
  });
  let d = new Promise((resolve, reject) => {
    setTimeout(() => {
      boxs.innerHTML += `<p>ATTACKING THE VICTIM.....<p>`;
      resolve("ATTACKING THE VICTIM.....");
    }, 8500);
  });
  let e = new Promise((resolve, reject) => {
    setTimeout(() => {
      boxs.innerHTML += `<p>ACCOUNT SUCCESSFULLY HACKED.....<p>`;
      resolve("ACCOUNT SUCCESSFULLY HACKED.....");
    }, 13000);
  });
  let f = new Promise((resolve, reject) => {
    setTimeout(() => {
      boxs.innerHTML += `<p>DETAILS HAVE BEEN SAVED AT c:/hackpreet/details/${user}<p>`;
      resolve("DETAILS HAVE BEEN SAVED AT c:/hackpreet/details/" + user);
    }, 14000);
  });
  let a1 = await a;
  console.log("Result = ", a1);
  let b1 = await b;
  console.log("Result = ", b1);
  let c1 = await c;
  console.log("Result = ", c1);
  let d1 = await d;
  console.log("Result = ", d1);
  let e1 = await e;
  console.log("Result = ", e1);
  let f1 = await f;
  console.log("Result = ", f1);

  //   return [a, b, c, d, e, f];   //? : return promise object
  return [a1, b1, c1, d1, e1, f1]; //? : return resolved value
};

const run = async () => {
  let hack = await hackerman();
  console.log("hack = ", hack);
};
run();
