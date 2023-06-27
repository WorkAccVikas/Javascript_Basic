// Todo : for all regular function call this point to window object
function hello(message) {
  console.log(this.name, message, this.id);
}

hello("Gm");

let obj1 = {
  id: 1,
  name: "Ram",
  f1: function () {
    console.log(this.name);
  },
  f2() {
    console.log(this.name);
  },
  f3: () => {
    console.log(this.name); // *: window object
  },
};

obj1.f1();
obj1.f2();
obj1.f3();

hello.call(obj1, "Gn");
