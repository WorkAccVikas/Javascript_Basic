// Todo : for of loop

for (let i of "Vikas") {
  console.log(i);
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

// Todo : iterate over array
for (let j of arr) {
  console.log(j);
}

// Todo : iterate over array of objects
for (let j of arrObj) {
  console.log(j);
  for (let i in j) {
    console.log(`Key = ${i} Value = ${j[i]}`);
  }
}
