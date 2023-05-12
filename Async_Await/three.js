console.log("Started");
function printNumber1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Number1 is done");
      resolve(10);
    }, 10000);
  });
}

function printNumber2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Number2 is done");
      resolve(20);
    }, 5000);
  });
}

// Todo : sequence => time = 15 sec
// async function oneByOne() {
//   console.time();
//   const number1 = await printNumber1();
//   console.log(number1);
//   console.log("ramu");
//   const number2 = await printNumber2();
//   console.log("kaka");
//   console.log(number1);
//   console.log(number2);
//   console.timeEnd();
// }

// oneByOne();

const hello = (n)=>{
  console.log("In hello function = ",n);
}

// Todo : parallel => time = 10 sec
async function inParallel() {
  console.time();
  const promise1 = printNumber1();
  const promise2 = printNumber2();
  const number1 = await promise1;
  console.log("ramu");
  const number2 = await promise2;
  console.log("kaka");
  console.log(number1);
  console.log(number2);
  hello(number2)
  console.timeEnd();
}

inParallel();
