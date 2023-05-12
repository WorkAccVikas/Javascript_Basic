// https://replit.com/@MrAli11/Exercise-7-Random-Password-Generator#index.html
// https://randompasswordgenerator.virtualgamer1.repl.co/index.html
// https://replit.com/@ArshilHapani/Excercise7PasswordGenerator?v=1

class Password {
  constructor() {
    this.upcl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.lwcl = "abcdefghijklmnopqrstuvwxyz";
    this.number = "1234567890";
    this.symbol = "~!@#$%^&*()_+|/";
  }

  funnyPassword(length) {
    let arr = [
      "display",
      "incorrect",
      "12345678",
      "iforgot",
      "secret",
      "MyPreciousssPasssword",
      "MyName",
      "Chitu_Hacker",
      "nothing",
      "user",
      "maiNahiBatunga",
      "Sorry",
      "1$perhour",
      "admin",
      "displayIs1234",
      "kyubatau",
      "helloworld",
    ];
    let pass = arr[Math.floor(Math.random() * arr.length)];
    return pass;
  }

  weakPassword(length) {
    let arr = [this.upcl, this.lwcl];
    let pass = "";
    for (let i = 0; i < length; i++) {
      let Ran1 = Math.floor(Math.random() * arr.length);
      let Ran2 = Math.floor(Math.random() * arr[Ran1].length);
      pass += arr[Ran1][Ran2];
    }
    return pass;
  }

  strongPassword(length) {
    let arr = [this.upcl, this.lwcl, this.number];
    let pass = "";
    for (let i = 0; i < length; i++) {
      let Ran1 = Math.floor(Math.random() * arr.length);
      let Ran2 = Math.floor(Math.random() * arr[Ran1].length);
      pass += arr[Ran1][Ran2];
    }
    return pass;
  }

  superStrongPassword(length) {
    let arr = [this.upcl, this.lwcl, this.number, this.symbol];
    let pass = "";
    for (let i = 0; i < length; i++) {
      let Ran1 = Math.floor(Math.random() * arr.length);
      let Ran2 = Math.floor(Math.random() * arr[Ran1].length);
      pass += arr[Ran1][Ran2];
    }
    return pass;
  }
}

let display = document.getElementById("display");
let radio = document.getElementsByClassName("redio");
let btn = document.getElementById("btn");
let copy = document.getElementById("copy");

let a = new Password();

btn.addEventListener("click", () => {
  let b;
  let length = document.getElementById("password-length").value;
  let passwordlength = document.getElementById("password-length");
  console.log(length);
  if (radio[0].checked) {
    b = a.funnyPassword(length);
    // passwordlength.setAttribute("readonly", true);
    document.getElementById("password-length").display = "none";
  } else if (radio[1].checked) {
    b = a.weakPassword(length);
  } else if (radio[2].checked) {
    b = a.strongPassword(length);
  } else if (radio[3].checked) {
    b = a.superStrongPassword(length);
  }
  display.value = b;
});

const toastLiveExample = document.getElementById("liveToast");
const toast = new bootstrap.Toast(toastLiveExample);

copy.addEventListener("click", () => {
  if (display.value != "") {
    display.select();
    display.setSelectionRange(0, 33);
    document.execCommand("copy");
    navigator.clipboard.writeText(display.value);
    toast.show();
  }
});
