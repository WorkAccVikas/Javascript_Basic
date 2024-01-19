// create string

let a = "Vikas";
console.log("a = ", a, ", length = ", a.length);
console.log(a[0]);

// here b string in single quotes
let b = "Ram";
console.log("b = ", b, ", length = ", b.length);

// Template literal's
let c1 = 3;
let c2 = 5;
let c3 = `c1 + c2 = ${c1 + c2}`;
console.log(c3);

// Escape Character
let d1 = "5 Mango's";
console.log(d1);
let d2 = '2 Mango"s';
console.log(d2);
console.log("Hello World");
console.log("Hello \rWorld");

// JavaScript Strings as Objects

/*
Do not create Strings objects.
The new keyword complicates the code and slows down execution speed.
String objects can produce unexpected results:
*/

let w = "John";
let x = "John";
let y = new String("John");
let z = new String("John");

console.log(`z = ${z}, type = ${typeof z}`);

console.log(`x === w : ${x === w}`);
console.log(`x == w : ${x == w}`);
console.log(`x === y : ${x === y}`);
console.log(`x == y : ${x == y}`);
console.log(`z === y : ${z === y}`);
console.log(`z == y : ${z == y}`);

console.log(typeof x);
console.log(typeof y);

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

let s3 = "Shyam";
let s4 = "shyam";
console.log(`${areEqualCaseInsensitive(s3, s4)}`);
console.log(s3 === s4);

const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

console.log(areEqual("ß", "ss", "de"));
console.log(areEqual("vikas", "Vikas", "de"));
console.log(areEqual("ı", "I", "tr"));

const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";

console.log(longString);

const longString1 =
  "THIS is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";

console.log(longString1);
