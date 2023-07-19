const list = [
  {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 3,
    name: "Pamela",
    email: "pam@example.com",
  },
  {
    id: 4,
    name: "Liz",
    email: "liz@example.com",
  },
];

// Todo : Hard Coded means we don't use in other array of objects
const r1 = list.filter((item) => item.name !== "John");
console.log(r1);

// Todo : solution 1
const filterByName = (list, name) => {
  return list.filter((item) => item.name !== name);
};

console.log(filterByName(list, "John"));

// Todo : solution by using currying
// * : (A)
// const filtering = (name) => (item) => item.name !== name;
// * : (B)
function filtering(name) {
  console.log(name);
  return function innerFunc(item) {
    console.log(item);
    return item.name !== name;
  };
}

const filterByName1 = (list, name) => {
  return list.filter(filtering(name));
};

console.log(filterByName1(list, "John"));
