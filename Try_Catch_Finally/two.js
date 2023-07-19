// Todo : Error Object properties
// try {
//   console.log(x);
//   console.log("AB");
// } catch (error) {
//   console.log(error);
//   console.log("Error Name = ", error.name);
//   console.log("Error Message = ", error.message);
//   console.log("Error Stack = ", error.stack);
// }

// Todo : Throw Custom Error (using class)
class checkCondition extends Error {
  constructor(msg) {
    super(msg);
  }
}

// try {
//   let y = Number.parseInt(prompt("Enter Age : "));
//   if (y < 18) {
//     // throw new Error("You are too young");   //?: throw error with custom message
//     throw new checkCondition("You are too young"); //?: throw custom error
//   }
//   console.log("xy"); // ! : not printing because error occur
// } catch (error) {
//   console.log(error);
//   console.log("Error Name = ", error.name);
//   console.log("Error Message = ", error.message);
//   console.log("Error Stack = ", error.stack);
// }

// console.log("End 1");

// Todo : we can then create other custom properties and methods to handle the application-specific error.
function CheckCondition(msg = "") {
  this.message = msg;
  this.name = "CheckCondition";
  this.stack = "stack here";
}

CheckCondition.prototype = Error.prototype;

try {
  let y = Number.parseInt(prompt("Enter Age : "));
  if (y < 18) {
    // throw new Error("You are too young");   //?: throw error with custom message
    throw new CheckCondition("You are too young........"); //?: throw custom error
  }
  console.log("xy"); // ! : not printing because error occur
} catch (error) {
  console.log(error);
  console.log("Error Name = ", error.name);
  console.log("Error Message = ", error.message);
  console.log("Error Stack = ", error.stack);
}

console.log("End 2");
