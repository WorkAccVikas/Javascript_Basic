function hello() {
  let _count = 0;
  function _update(val) {
    _count += val;
    console.log("Count = ", _count);
  }

  return {
    increment(val) {
      _update(val);
    },
    decrement(val) {
      _update(-val);
    },
    getCount() {
      return _count;
    },
  };
}

let r1 = hello();
r1.increment(1);
r1.increment(2);
r1.increment(5);
r1.decrement(1);
r1.decrement(1);
console.log(r1.getCount());
