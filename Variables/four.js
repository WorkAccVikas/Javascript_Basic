let x = 1;
var p = 101;

{
  let x = 2;
  var p = 102;
  console.log(x, p);  // * : 2, 102
}

console.log(x, p);  // * : 1, 102
