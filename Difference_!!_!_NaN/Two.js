console.log(isNaN("vikas"));
console.log(isNaN("1a"));
console.log(isNaN({}));
console.log(isNaN(NaN));
console.log(isNaN([1, 2]));
console.log(
  isNaN([
    { id: 1, name: "Ram" },
    { id: 2, name: "Seeta" },
  ])
);

console.log(isNaN([]));
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN("0"));
console.log(isNaN(0));
console.log(isNaN("1"));
console.log(isNaN(1));
console.log(isNaN("-1"));
console.log(isNaN(-1));
console.log(isNaN(""));