// for (var i = 0; i <= 4; i++) {
//   console.log("Var : value of i = ", i);
// }

// console.log("Var : End of value i = ", i); // ? : Value of i = 5

// for (let j = 0; j <= 4; j++) {
//   console.log("let : value of j = ", j);
// }

// console.log("End of value j = ", j);  // ! : Error

// Todo : print number by 1 sec interval
for (var k = 0; k <= 4; k++) {
  // IIFE
  (function (k) {
    console.log("In IIFE k = ", k);
    setTimeout(() => {
      console.log("Var : value of k = ", k);
    }, k * 1000);
  })(k);
}

console.log(k);
