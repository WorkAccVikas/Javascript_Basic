// Todo : call

let obj1 = {
  id: 1,
  name: "ram",
  city: "pune",
  printDetails: function () {
    console.log(this.id, "=>", this.name);
  },
};

let obj2 = {
  id: 2,
  name: "shyam",
  city: "mumbai",
};

let obj3 = {
  id: 3,
  name: "laxman",
  city: "goa",
};

obj1.printDetails();
obj1.printDetails.call(obj2);
obj1.printDetails.call(obj3);

function display() {
  console.log("Details = ", this.id, this.name);
}
display.call(obj3);

let show = function (x, y) {
  console.log("Show = ", x, this.id, this.name, y);
};
show.call(obj3, "Good Morning", "Come in");
show.call(obj3, ["Good Morning", "Come in"]); // ! : Wrong way

// ! : Arrow Function not working
let showDetails = () => {
  console.log("Show Details = ", this.id, this.name);
};
showDetails.call(obj3);

let getData = function (classname, speed) {
  console.log("Get Data = ", this.id, this.city, classname, speed);
};

// * : We can pass n number of arguments in call (separated by ,)
getData.call(obj2, "L", 70);
getData.call(obj3, "XI", 808);

// Todo : apply
// * : We can pass n number of arguments in apply (single array)
let fetchData = function (classname, speed) {
  console.log("Fetch Data = ", this.id, this.city, classname, speed);
};

fetchData.apply(obj3, ["XII", 100]);

let fetchMultipleData = function (...arguments) {
  console.log(arguments);
  console.log(...arguments);
  for (let i of arguments) {
    console.log(i);
  }
  //   * : Destructor the array
  [a1, b1, c1, d1] = arguments;
  console.log(a1, b1, c1, d1);

  console.log("Fetch Multiple Data = ", this.id, this.city, ...arguments);
};

fetchMultipleData.apply(obj2, [10, 20, 30, 40]);

// Todo : bind
// * : here we store copy of result and call whenever we need it
let getRecord = function (x, y) {
  console.log("Get Record = ", this.id, this.name, this.city, x, y);
  return y + 1;
};
let a = getRecord.bind(obj2, "UK", 1000);
console.log(a());
let b = getRecord.bind(obj3, ["UK", 5000]); // ! : Wrong Way
console.log(b());
