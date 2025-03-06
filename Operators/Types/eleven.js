// TOPIC : void operator

console.log(`void (console.log("hi")) = ${void console.log("hi")}`);
console.log(void 0); // undefined
console.log(void (2 + 2)); // undefined
console.log(void "Hello"); // undefined

function getName(str) {
  let name = "Ram";
  console.log(name + " => " + str);
  return str;
}

getName("Sita");

const btnClick = () => getName("Tom");
console.log(`Call function without void = ${btnClick()}`);
const btnClick1 = () => void getName("Amit");
console.log(`Call function with void = ${btnClick1()}`);
console.log(getName("Sachin")); // Sachin
console.log(void getName("Virat")); // undefined
