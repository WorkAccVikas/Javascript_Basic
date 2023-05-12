// Todo : Without IIFE try username in console in browser output = Jerry (because three.js is imported after two.js)
// var userName = "Jerry";

// function display(name) {
//   console.log("three.js: " + name);
// }

// display(userName);

// Todo : With IIFE if you try username in console in browser it will show error because it is not defined
// * : IIFE will deleted all variable and free memory immediately
(function () {
  var userName = "Jerry";

  function display(name) {
    console.log("three.js: " + name);
  }

  display(userName);
})();

