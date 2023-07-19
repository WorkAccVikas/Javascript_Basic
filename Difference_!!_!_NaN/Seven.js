let Person = {
  name: "Vikas",
  amount: 0,
};

console.log(
  `${Person.name} ${!!Person.amount ? "have money" : "haven't money"}`
);
