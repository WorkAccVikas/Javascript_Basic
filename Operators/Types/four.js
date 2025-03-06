// TOPIC : Comparison Operators

let a = 10;
let b = 20;
let c = "10";
let d = "20";
let e = 10;
let f = 20;
let g = "10";
let h = "20";

// POINT : EQUAL (==) vs STRICT EQUAL (===)
console.log(a == b); // false

console.log(a == c); // true
console.log(a === c); // false

console.log(a == d); // false

console.log(a == e); // true
console.log(a === e); // true

console.log(a == f); // false

// POINT : NOT EQUAL (!=) vs STRICT NOT EQUAL (!==)
console.log(a != b); // true

console.log(a != c); // false
console.log(a !== c); // true

console.log(a != d); // true

console.log(a != e); // false
console.log(a !== e); // false

console.log(a != f); // true

// POINT : GREATER THAN (>) vs GREATER THAN OR EQUAL TO (>=)
console.log(a > b); // false
console.log(a > c); // false
console.log(a > d); // false
console.log(a > e); // false
console.log(a > f); // false

console.log(b > a); // true
console.log(c > a); // false
console.log(d > a); // true
console.log(e > a); // false
console.log(f > a); // true

console.log(a >= b); // false
console.log(a >= c); // true
console.log(a >= d); // false
console.log(a >= e); // true
console.log(a >= f); // false

// POINT : LESS THAN (<) vs LESS THAN OR EQUAL TO (<=)
console.log(a < b); // true
console.log(a < c); // false
console.log(a < d); // true
console.log(a < e); // false
console.log(a < f); // true

console.log(b <= a); // false
console.log(c <= a); // true
console.log(d <= a); // false
console.log(e <= a); // true
console.log(f <= a); // false