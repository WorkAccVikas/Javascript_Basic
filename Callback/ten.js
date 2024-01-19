// TODO : 1. Register 2. Send Email 3. Login 4. Get User Data 5. Display User Data

console.log("Start");

function register() {
  setTimeout(() => {
    console.log("Register end");
  }, 6 * 1000);
}

function sendEmail() {
  setTimeout(() => {
    console.log("Email send");
  }, 2 * 1000);
}

function login() {
  setTimeout(() => {
    console.log("Login end");
  }, 3 * 1000);
}

function getUserData() {
  setTimeout(() => {
    console.log("Get user data");
  }, 4 * 1000);
}

function displayData() {
  setTimeout(() => {
    console.log("Display data");
  }, 5 * 1000);
}

register();
sendEmail();
login();
getUserData();
displayData();

console.log("Other work");

// PROBLEM (1) : Here, Other work is printed because settimeout is used (means async)
// PROBLEM (2) : Here, Register take 6 second but Email send is printed before register printed
