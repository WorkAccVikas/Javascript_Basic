// Todo : loop in array

let arr1 = [1, 2, 3, 4, 5, 6];

// * : 1. simple for loop

for (let index = 0; index < arr1.length; index++) {
  const element = arr1[index];
  console.log(`Index = ${index}, Value = ${element}`);
}

// * : 2. forEach

arr1.forEach((value, index, array) => {
  console.log(value ** 2);
});

console.log(arr1);

// * : 3. Array.from

let s1 = "Vikas";
let arr2 = Array.from(s1);
console.log(arr2);

// * : 4. for..of
for (let i of arr1) {
  console.log("Value = ", i);
}

// * : 5. for..in
for (let j in arr1) {
  console.log(`Index = ${j}, Value = ${arr1[j]}`);
}
