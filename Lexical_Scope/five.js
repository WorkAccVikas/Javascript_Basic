function a() {
  var b = 10;
  function c() {
    console.log(b);
  }
  c();
}

a();
// console.log(b); // ! : Error b is not defined

function b() {
  return function (bc = 0) {
    var xyz = 55;
    console.log(xyz + bc);
  };
}

let r1 = b();
// console.log(r1)
r1();
