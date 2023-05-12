class Student {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log("Name of student : ", this.name);
  }
}

let s1 = new Student("Vikas");
// s1.showName();

// setTimeout(s1.showName, 1000); // ! : here undefined this will point to window object because it lost reference

// Todo : solution for above

// Todo : (A)
// setTimeout(s1.showName.bind(s1), 1000); 
// Todo : (B)
setTimeout(()=>{
    s1.showName()
}, 1000); 
