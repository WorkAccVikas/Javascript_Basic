console.log(Boolean(1));
console.log(Boolean("1"));
console.log(Boolean(-1));
console.log(Boolean("-1"));
console.log(Boolean({}));
console.log(Boolean({ id: 1, name: "Ram" }));
console.log(Boolean([]));
console.log(Boolean([1, 2, 3]));
console.log(
  Boolean([
    {
      id: 1,
    },
  ])
);
console.log(Boolean(true));

console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(0));
