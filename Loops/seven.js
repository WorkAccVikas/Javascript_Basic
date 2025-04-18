const x = Array.from({ length: 10000000 }, (e, i) => i + 1);

console.time("time");
console.log(x.length);
console.timeEnd("time");

console.time("my");
for (let i = 0; i < x.length; i++) {}
console.timeEnd("my");

console.time("bye");
const length = x.length;
for (let i = 0; i < length; i++) {}
console.timeEnd("bye");

console.time("eeo");
for (let i = 0, len = x.length; i < len; ++i) {
  // logic
}
console.timeEnd("eeo");
