// TOPIC : Filter polyfill

function myFilter(cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(this, this[i], i, this)) {
      output.push(this[i]);
    }
  }

  return output;
}

Array.prototype.myFilter = myFilter;
