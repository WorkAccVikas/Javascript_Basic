const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", sendEmail);

function sendEmail() {
  console.count("Send Email");
}

let apiCall;

function throttle(fn, time = 500) {
  if (apiCall) return;
  apiCall = true;
  setTimeout(() => {
    fn();
    apiCall = false;
  }, time);
}

btn2.addEventListener("click", () => throttle(sendEmail, 2000));
