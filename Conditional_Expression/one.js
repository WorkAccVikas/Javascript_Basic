// Todo : Conditional Expression
// if, if else, if else if else
let age = 28;

if (age < 0) {
  console.log("This is an invalid age");
} else if (age < 9) {
  console.log("You are a kid and you cannot even think of driving");
} else if (age >= 9 && age < 18) {
  console.log("You are a kid and you can think of driving after 18");
} else {
  console.log("You can now drive as you are above 18");
}

console.log("End");
console.log("You can", age > 18 ? "drive" : "not drive");
