// TOPIC : == VS ===

// LINK : https://chatgpt.com/share/67c9d49a-1210-800f-9646-fa12b8ecdd90

console.log(5 == "5"); // true (type coercion: "5" converted to number 5)
console.log(5 === "5"); // false (different types: number vs string)

console.log(null == undefined); // true (both considered "empty" values)
console.log(null === undefined); // false (different types: null vs undefined)

console.log(true == 1); // true (true is coerced to 1)
console.log(true === 1); // false (boolean vs number)

console.log([] == false); // true (empty array coerced to false)
console.log([] === false); // false (array vs boolean)

console.log("0" == false); // true ("0" is coerced to number 0)
console.log("0" === false); // false (string vs number)

// Edge cases
console.log({} == {}); // false (different object references)
console.log([] == []); // false (different array references)
let obj = {};
console.log(obj == obj); // true (same reference)

console.log(null == undefined); // true
console.log(null === undefined); // false
// Falsy does not mean equal: null and false are both falsy, but they are not equal under ==.
console.log(null == false); // false
console.log(undefined == false); // false

console.log([] == ""); // true ([] converted to empty string)
console.log([] == 0); // true ([] → "" → 0)
console.log([0] == 0); // true ([0] → "0" → 0)
console.log([""] == 0); // true ([""] → "" → 0)

// Falsy value (case for null and undefined)
console.log(null == undefined); // true (special case)
console.log(null == false); // false
console.log(undefined == false); // false
console.log(null == 0); // false
console.log(undefined == 0); // false
console.log(null == ""); // false
console.log(undefined == ""); // false
console.log(null == NaN); // false
console.log(undefined == NaN); // false

console.log(0 == false); // true
console.log(0 === false); // false
console.log(0 == ""); // true
console.log(0 === ""); // false
