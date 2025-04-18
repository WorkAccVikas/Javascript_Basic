// TOPIC : for loop
// Sum of n numbers

let n = 5;
let sum = 0;

for (let i = 0; i < n; i++) {
  console.log(`Number = ${i}`);
  sum += i;
}
console.log(`Sum = ${sum}`);

// ####################################################################
// POINT : for loop with await

async function run() {
  for (let i = 0; i < 3; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(i);
  }
}
run();

console.log("End")
// DESC : Prints End then 0, 1, 2 after every 1 second
// ####################################################################

// POINT : Early exit : break/return
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const target1 = 4;

for (let i = 0; i < arr1.length; i++) {
  console.log({i})
  if (arr1[i] === target1) {
    break;
  }
}


// ####################################################################
// ####################################################################
