// Todo : (1)
function* simpleGenerator() {
  console.log("Line 1");
  let x = 10;
  yield x;
  console.log("Line 2");
  let a = 1;
  let b = 2;
  yield a + b;
  console.log("Line 3");
  yield "Sachin";
  console.log("Line 4");
}

let r1 = simpleGenerator();
console.log(r1.next());
console.log(r1.next());
console.log(r1.next());
console.log(r1.next());

// Todo : (2)
function* simpleGenerator1() {
  let x = 1;
  while (true) {
    yield x;
    x++;
  }
}

let r2 = simpleGenerator1();

const newID = () => {
  //   console.log(r2.next());
  document.getElementById("sp1").innerText = r2.next().value;
};
