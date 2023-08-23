// TOPIC : Map polyfill

function myMap(cb) {
  let output = [];
  for (let i = 0; i < this.length; ++i) {
    output.push(cb(this[i], i, this));
  }
  return output;
}

Array.prototype.myMap = myMap;
