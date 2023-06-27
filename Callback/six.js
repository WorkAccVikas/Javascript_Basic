function add(x, y, callback) {
  console.log("Add = ", x + y);
  callback(x + y);
}

add(100, 200, function (m) {
  console.log("Callback = ", m * 2);
});
