// LINK : https://chatgpt.com/share/68007860-7f74-800f-ac18-e161da4b06b9

// TOPIC : for in loop

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

// DESC : Best for iterating over objects

// #####################################################################
// DESC : ❌ Not Ideal for Arrays
const arr = [10, 20, 30];
for (let i in arr) {
  console.log(i); // indexes: "0", "1", "2" as strings
}

// #####################################################################
// POINT : Early exit : break/return

const obj1 = { a: 1, b: 2, c: 3 };

for (let key in obj1) {
  console.log(key); // logs "a", then "b"
  if (key === "b") {
    break; // exits the loop
  }
}

function checkForKey(targetKey) {
  const obj = { a: 1, b: 2, c: 3 };

  for (let key in obj) {
    console.log(key); // logs "a", then "b"
    if (key === targetKey) {
      console.log("Found:", key);
      return; // early exit from the function + loop
    }
  }
  console.log("Key not found");
}

checkForKey("b"); // Found: b

// #####################################################################

const obj2 = { a: 1, b: 2, c: 3 };

Object.prototype.z = 26;

for (let key in obj2) {
  console.log(key, obj2[key]); // a,1 b,2 c,3 z,26
}

for (let key1 in obj2) {
  if(obj2.hasOwnProperty(key1)){
    console.log(key1, obj2[key1]); // a,1 b,2 c,3
  }
}

// #####################################################################
