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
function filtering(searchVal, property) {
  console.log(searchVal);
  return function innerFunc(item) {
    console.log(item);
    console.log(property);
    return item[property] !== searchVal;
  };
}

const filterByName1 = (list, searchVal) => {
  return list.filter(filtering(searchVal, "name"));
};

console.log(filterByName1(list, "John"));
