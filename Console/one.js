// Todo : all methods of console
console.log(console);

// * : 1. log
console.log("log");

// * : 2. warn
console.warn("warn");

// * : 3. info
console.info("info");

// * : 4. assert
console.assert(5 > 10);
console.assert(55 > 10);

// * : 5. time and timeEnd
console.time("forloop");
for (let index = 0; index < 5; index++) {
  console.log("in forloop");
  console.count("Label forloop");
}

console.timeEnd("forloop");

let idx = 0;
console.time("whileloop");
while (idx < 5) {
  console.log("in whileloop");
  console.count("Label whileloop");

  idx += 1;
}
console.timeEnd("whileloop");

const obj1 = {
  id: 1,
  name: "ram",
  city: "goa",
};

// * : 6. table
console.table(obj1);

// * : 7. error
console.error("error");
