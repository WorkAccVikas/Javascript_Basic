setTimeout(() => {
  console.log("timer");
}, 5000);

function x(p1) {
  console.log("x called");
  p1();
}

x(function y() {
  console.log("y called");
});
