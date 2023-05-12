// Todo : Object

let student = {
  id: 1,
  age: 25,
  name: "ram",
  courses: ["java", "c"],
};

console.log(student.name);

// * : Rest
const { age, ...rest } = student;
console.log(age);
console.log(rest);

// * : Spread
const newStudent = { ...student, age: 55 }; // * : override property in object
console.log(newStudent);
console.log(student);
// * : below 2 line for add new property in object
newStudent.city = "goa";
newStudent["class"] = "xi";
console.log(newStudent);
console.log(student);
