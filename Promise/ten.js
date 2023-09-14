// TODO : 1. Register 2. Send Email 3. Login 4. Get User Data 5. Display User Data

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("Error while ");
      console.log("Register end");
        resolve(1);
    }, 1 * 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject("Error while ");
      console.log("Email send");
      resolve(2);
    }, 4 * 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject("Error while ");
      console.log("Login end");
      resolve(3);
    }, 3 * 1000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject("Error while ");
      console.log("Get user data");
      resolve(4);
    }, 4 * 1000);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("Error while displayData");
      console.log("Display data");
      resolve(5);
    }, 5 * 1000);
  });
}

register()
  .then((data1) => {
    console.log("data1 = ", data1);
    return sendEmail();
  })
  .then((data2) => {
    console.log("data2 = ", data2);
    return login();
  })
  .then((data3) => {
    console.log("data3 = ", data3);
    return getUserData();
  })
  .then((data4) => {
    console.log("data4 = ", data4);
    return displayData();
  })
  .then((data5) => {
    console.log("data5 = ", data5);
  })
  .catch((err) => {
    console.log("Error at catch block = ", err);
  })
  .then(() => {
    console.log("After catch then block is always executed");
  });
