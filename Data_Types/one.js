// Todo : Primitive Data types
console.log("Primitive Data types");
// * : n n b b s s u
let a = null;
let b = 10;
let c1 = BigInt(10);
let c2 = BigInt(52) + BigInt(22);
let d = true;
let e = "Ram";
let f = Symbol("I am a boy");
let g1;
let g2 = undefined;

console.log(a, b, c1, c2, d, e, f, g1, g2);

// check the type of variable

console.log(`c1 data type = ${typeof c1}`);

// Non-Primitive Data types

let obj = {
  id: 1,
  name: "jerry",
  valid: true,
  city: ["goa", "mumbai"],
  contact: "b19"
};

console.log(obj);

console.log(obj["name"]);

console.log(obj.contact);

const obj2 = {
  "sid": 11,
  "sname": "raju",
  "course": "hindi"
};

console.log(obj2);

console.log(typeof obj2);

// add a new key value in existing object : 1st way
obj2['fee'] = 2000;
console.log(obj2);

// add a new key value in existing object : 2nd way
obj2.marks = 15;
console.log(obj2);

// education key absent in object it will show undefined
console.log(obj2.education);



