function hello() {
  console.log("hello world");
}

hello();
hello();
hello();
hello();
hello();

// Todo : Once Function
function greet() {
  let count = 0;

  return function () {
    if (count > 0) {
      console.log("Already called");
    } else {
      console.log("Good Morning");
      ++count;
    }
  };
}

let r1 = greet();
r1();
r1();
r1();
r1();
