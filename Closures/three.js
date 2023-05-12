function x() {
  var a = 1;
  var q = 1000; // * : smartly gc by js engine
  function y() {
    console.log(a);
  }
  //   a = 100; // * : if you write this line output = 100 otherwise 1
  return y;
}

// let p = x();
// console.log(p);
// console.log("hi");
// p();

function m() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log({ i });
    }, i * 1000);
  }

  for (let j = 0; j <= 5; j++) {
    setTimeout(() => {
      console.log({ j });
    }, j * 1000);
  }

  // * : you use var in for loop and output must be same as let output
  for (var k = 0; k <= 5; k++) {
    function close(k) {
      setTimeout(() => {
        console.log({ k });
      }, k * 1000);
    }
    close(k);
  }
}
m(); // ! : here i is 6 (5 times)
// * : solution (change var to let in for loop)
