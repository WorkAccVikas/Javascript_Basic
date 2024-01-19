// Todo : Case (1)
function f1(a, b) {
  console.log("f1 = ", a, b, this); // ! : Window Object
}
f1("Hi", "Bye");
// Todo : Case (2)
const person = {
  id: 1,
  name: "Ram",

  f2() {
    console.log("f2 = ", this.name, this.id); // * : Person Object
  },

  f3: () => {
    console.log("f3 = ", this.name, this.id); // ! : Window Object
  },

  f4: function () {
    console.log("f4 = ", this.name, this.id); //  * : Person Object
  },
  f5: function () {
    console.log("f5 = ", this.id, this.name);
    function f51() {
      console.log("f51 = ", this.id, this.name); // ! : Window Object
    }
    f51();
    // f51.bind(this)();   // * : solution for above line that show window object

    const f52 = function () {
      console.log("f52 = ", this.id, this.name); // ! : Window Object
    };

    f52();
    // f52.bind(this)();   // * : solution for above line that show window object

    const f53 = () => {
      console.log("f53 = ", this.id, this.name); // * : Person Object
    };

    f53();
  },
  family: {
    father: "Karan",
    mother: "Rajani",

    f6: function () {
      console.log("f6 = ", this.father, this.mother); // * : Family Object
    },
  },
};

person.f2();
person.f3();
person.f4();
person.f5();
person.family.f6();

// Todo : Case (3)
const x1 = person.f2;
x1(); // ! : Window Object because we call it as normal function

// Todo : Case (4)
function hello(x, y) {
  console.log("In hello = ", this.name, this.age, x, y);

  function fun1() {
    console.log("fun1 = ", this.name, this.age, x, y);
  }
  //   fun1();   // ! : Window Object
  fun1.bind(this)(); // * : Person2 Object

  const fun2 = function () {
    console.log("fun2 = ", this.name, this.age, x, y);
  };
  //   fun2(); // ! : Window Object
  fun2.bind(this)(); // * : Person2 Object

  const fun3 = () => {
    console.log("fun3 = ", this.name, this.age, x, y);
  };
  fun3(); // * : Person2 Object
}

const person2 = {
  name: "Ajay",
  age: 30,
};
hello.call(person2, "GM", "GN");
