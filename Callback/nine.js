// TODO : 1. Register 2. Send Email 3. Login 4. Get User Data 5. Display User Data

console.log("Start");

function waitForNSecond(second = 1) {
  let ms = second * 1000 + new Date().getTime();
  while (new Date() < ms) {}
}

function register() {
  waitForNSecond(1);
  console.log("Register end");
}

function sendEmail() {
  waitForNSecond(2);
  console.log("Email send");
}

function login() {
  waitForNSecond(3);
  console.log("Login end");
}

function getUserData() {
  waitForNSecond(4);
  console.log("Get user data");
}

function displayData() {
  waitForNSecond(5);
  console.log("Display data");
}

register();
sendEmail();
login();
getUserData();
displayData();

console.log("Other work");

// PROBLEM : Here, sync function call Other work to print it will wait for 15 second
