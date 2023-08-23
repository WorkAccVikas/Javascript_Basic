// TODO : 1. Register 2. Send Email 3. Login 4. Get User Data 5. Display User Data

function register(cb) {
  setTimeout(() => {
    console.log("Register end");
    cb();
  }, 6 * 1000);
}

function sendEmail(cb) {
  setTimeout(() => {
    console.log("Email send");
    cb();
  }, 2 * 1000);
}

function login(cb) {
  setTimeout(() => {
    console.log("Login end");
    cb();
  }, 3 * 1000);
}

function getUserData(cb) {
  setTimeout(() => {
    console.log("Get user data");
    cb();
    cb();
  }, 4 * 1000);
}

function displayData() {
  setTimeout(() => {
    console.log("Display data");
  }, 5 * 1000);
}

register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayData();
      });
    });
  });
});

console.log("Other work");

// PROBLEM : CALLBACK HELL
// PROBLEM : USING CALLBACK WE CAN CALL MULTIPLE TIMES

// See Promise/ten.js