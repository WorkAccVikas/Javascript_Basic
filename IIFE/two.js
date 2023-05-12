// Todo : Without IIFE try username in console in browser output = Jerry (because three.js is imported after two.js)
// var userName = "Tom";

// function display(name) {
//   console.log("two.js: " + name);
// }

// display(userName);

// Todo : With IIFE if you try username in console in browser it will show error because it is not defined
// * : IIFE will deleted all variable and free memory immediately
(function () {
  var userName = "Tom";

  function display(name) {
    console.log("two.js: " + name);
  }

  display(userName);
})();
