let radius = [1, 3, 4, 5];
const area = (r) => {
  return Math.PI * r ** 2;
};
// ! : Don't use arrow function in RHS
Array.prototype.calculate5 = function (logic) {
  let output = [];
  console.log(this.length);
  for (let index = 0; index < this.length; index++) {
    console.log("yes");
    output.push(logic(this[index]));
  }
  console.log({output});
  return output;
};

console.log(radius.calculate5(area));
