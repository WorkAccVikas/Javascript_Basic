function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log("increment = ", count);
  };
  this.decrementCounter = function () {
    count--;
    console.log("decrement = ", count);
  };
}

let c1 = new Counter();
console.log(c1); // * : Counter { incrementCounter: [λ], decrementCounter: [λ] }
c1.incrementCounter();
c1.incrementCounter();
c1.incrementCounter();
c1.decrementCounter();

let c2 = new Counter();
c2.incrementCounter();
c2.incrementCounter();
c2.incrementCounter();
c2.incrementCounter();
c2.incrementCounter();
c2.decrementCounter();
c2.decrementCounter();
c2.decrementCounter();
