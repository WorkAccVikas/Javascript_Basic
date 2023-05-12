function counter() {
  var count = 0;
  function incrementCounter() {
    count++;
    console.log(count);
  }
  return incrementCounter;
}

let c1 = counter();
c1();
c1();
c1();
let c2 = counter();
c2();
c2();
