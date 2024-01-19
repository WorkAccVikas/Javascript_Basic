// Todo : YTD LINK : https://www.youtube.com/shorts/yfcfPFsYkdU

function waitForNSecond(second = 5) {
  let end = second * 1000 + new Date().getTime();
  while (new Date().getTime() < end) {}
}

function expensiveFunction(size, time) {
  console.log(`Expensive Function`);
  let newArray = new Array(size).fill(0);
  waitForNSecond(time);
}

function display(index) {
  expensiveFunction(500);
  return index * Math.random();
}

let r1 = display(10);
console.log({ r1 });
let r2 = display(20);
console.log({ r2 });

function displayWithClosure() {
  expensiveFunction(500);
  return (index) => {
    return index * Math.random();
  };
}

let newCall = displayWithClosure();

let r3 = newCall(30);
console.log({ r3 });
let r4 = newCall(40);
console.log({ r4 });
