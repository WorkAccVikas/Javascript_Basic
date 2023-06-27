function find(position) {
  let arr = [];
  for (let index = 0; index < 1000000; index++) {
    arr[index] = index * index;
  }

  console.log("length = ", arr.length);
  console.log(arr[position]);
}

console.time("50");
find(50);
console.timeEnd("50");

function findValues() {
  let arr = [];
  for (let index = 0; index < 1000000; index++) {
    arr[index] = index * index;
  }

  return function (m) {
    console.log(arr[m]);
  };
}

console.time("50");
findValues()(50);
console.timeEnd("50");
