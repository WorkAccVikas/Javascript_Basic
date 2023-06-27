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

async function printNumber3() {
  await delay(3000);
  console.log("Number3 is done");
  return 30;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Todo : sequence => time = 18 sec
async function oneByOne() {
  console.time();
  const number1 = await printNumber1();
  console.log(number1);
  console.log("ramu");
  const number2 = await printNumber2();
  console.log("kaka");
  const number3 = await printNumber3();
  console.log("bye");
  console.log(number1);
  console.log(number2);
  console.log(number3);
  console.timeEnd();
}

// oneByOne();

async function myFunction() {
  const result = await printNumber3();
  console.log(result);
}

// myFunction();

const hello = (n) => {
  console.log("In hello function = ", n);
};

// Todo : parallel => time = 10 sec
async function inParallel() {
  console.time();
  const promise1 = printNumber1();
  const promise2 = printNumber2();
  const promise3 = printNumber3();
  const number1 = await promise1;
  console.log("ramu");
  const number2 = await promise2;
  console.log("kaka");
  const number3 = await promise3;
  console.log("bye");
  console.log(number1);
  console.log(number2);
  console.log(number3);
  hello(number2);
  console.timeEnd();
}

inParallel();
