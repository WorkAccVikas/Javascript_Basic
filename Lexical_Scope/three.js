const fun1 = () => {
  let obj1 = {
    list: "friend",
    name: ["amit", "rohan", "tom"],
    getFriends: function () {
      console.log("getFriends", this.list);
      console.log("getFriends", this.name);
      this.name.map(function (item) {
        console.log("Line 9 ", this.list, item);
        console.log("Line 10 ", this.name, item);
      });
    },
    getFriends1: function () {
      console.log("getFriends1", this.list);
      console.log("getFriends1", this.name);
      let that = this;
      this.name.map(function (item) {
        console.log("Line 18 ", that.list, item);
        console.log("Line 19 ", that.name, item);
      });
    },
    getFriends2: function () {
      console.log("getFriends2", this.list);
      console.log("getFriends2", this.name);
      let that = this;
      this.name.map((item) => {
        console.log("Line 27 ", this.list, item);
        console.log("Line 28 ", this.name, item);
        console.log("Line 29 ", this); // * : refer current object
      });
    },
    // ! : don't use arrow function use regular function as above all
    getFriends3: () => {
      console.log("getFriends3", this.list); // ! : undefined
      console.log("getFriends3", this.name); // ! : empty string
      console.log("getFriends3", this); // * : refer window object
    },
  };
  obj1.getFriends();
  obj1.getFriends1(); // To solve lexical problem in this using creating that variable
  obj1.getFriends2(); // *: In arrow function no lexical scope because it refer to parent
  obj1.getFriends3();
};

fun1();
