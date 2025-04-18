// LINK : https://chatgpt.com/share/680263bd-2248-800f-82eb-b6dbc6f282af
// TOPIC : for of loop

for (let i of "Vikas") {
  console.log(i); // V i k a s
}

let arr = [1, 2, 3, 4];
let arrObj = [
  {
    id: 1,
    name: "ram",
  },
  {
    id: 2,
    name: "anil",
  },
  {
    id: 3,
    name: "joker",
  },
];

// POINT : iterate over array
for (let j of arr) {
  console.log(j);
}

// POINT : iterate over array of objects
for (let j of arrObj) {
  console.log(j);
  for (let i in j) {
    console.log(`Key = ${i} Value = ${j[i]}`);
  }
}

// POINT : async/await
async function run() {
  const nums = [1, 2, 3];
  for (const num of nums) {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(num); // Logs 1,2,3 with delay
  }
}
run();

async function* generate() {
  yield 1;
  yield 2;
  yield 3;
}

async function run() {
  for await (const num of generate()) {
    console.log(num); // Logs 1, 2, 3
  }
}
run();

// ################################################################################
const input = [1, [2, [3, 4], 5], 6];

function* flatten(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flatten(item); // recursive generator
    } else {
      yield item;
    }
  }
}

for (const val of flatten(input)) {
  console.log(val);
}