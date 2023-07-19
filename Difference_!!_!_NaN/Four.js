console.log(isNaN({}));
console.log(isNaN({ id: 1, name: "Ram" }));
console.log(isNaN(undefined));
console.log(isNaN(NaN));
console.log(isNaN("vikas"));
console.log(
  isNaN([
    {
      id: 1,
    },
  ])
);
console.log(isNaN([1, 2, 3]));

console.log(isNaN(1));
console.log(isNaN("1"));
console.log(isNaN(-1));
console.log(isNaN("-1"));
console.log(isNaN([]));
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN(null));
console.log(isNaN(""));
console.log(isNaN(0));
