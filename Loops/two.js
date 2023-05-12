// Todo : for in loop

let obj = {
  id: 1,
  name: "ram",
  city: "goa",
};

for (let i in obj) {
  console.log(`Key = ${i} Value = ${obj[i]}`);
}

console.log(Object.keys(obj).length);
console.log(Object.keys(obj));

// Todo : iterate in object using for loop
for (let j = 0; j < Object.keys(obj).length; j++) {
  console.log(`Iteration ${j}`);
  console.log(
    `Key : "${Object.keys(obj)[j]}" => Value : "${obj[Object.keys(obj)[j]]}"`
  );
}
