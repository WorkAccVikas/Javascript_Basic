function a() {
  var z = 3;
  var y = 4;
  b();
  function b() {
    var w = 5;
    console.log(x, y, z, w);
  }
}

var x = 1;
var y = 2;
a();
