// // *: Synchronous
// let a = 10;
// let b = 20;
// console.log(a + b);
// console.log("End of Synchronous");

// // *: Asynchronous
// console.log("Start of Async");
// setTimeout(function () {
//   console.log("I am boy");
// }, 3000);
// console.log("end of Async");

// *: Callback

function hello(err, src) {
  if (err) {
    console.log("hello function error = ", err);
    return;
  }
  console.log("hello function = ", src);
}

const goodmorning = (err, src) => {
  if (err) {
    console.log("goodmorning function error = ", err);
    return;
  }
  console.log("goodmorning function = ", src);
};

function loadScript(src_url, callback) {
  let script = document.createElement("script");
  script.src = src_url;
  script.onload = () => {
    console.log("Loaded script with SRC: " + src_url);
    callback(null, src_url);
  };
  script.onerror = function () {
    console.log("Error loading script with SRC: " + src_url);
    callback(new Error("Src got some error"));
  };
  document.body.appendChild(script);
}

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );

setTimeout(() => {
  loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
    goodmorning
  );
}, 5000);

// ? : wrong script url
// setTimeout(() => {
//   loadScript(
//     "https://cdn.jsdelivr123.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
//     hello
//   );
// }, 5000);
