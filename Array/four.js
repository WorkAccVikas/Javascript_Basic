let companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
  { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
];

// simple for

for (let i = 0; i < companies.length; i++) {
  console.log("Iteration = ", i);
  console.log("Value = ", companies[i]);
  console.log("Company Name = ", companies[i].name);
}

// forEach

companies.forEach((company, index) => {
  console.log("Iteration = ", index);
  console.log("Value = ", company);
  console.log("Company Name = ", company.name);
});

const ages = [10, 88, 45, 22, 3, 48, 77, 13, 20];

// simple for loop
for (let index = 0; index < ages.length; index++) {
  const element = ages[index];
  if (element > 20) {
    console.log(element);
  }
}

// filter
let ages_after_filter = ages.filter((element, index) => {
  if (element > 20) {
    return true;
  }
});

console.log(ages_after_filter);

let companies_after_filter_with_simple_function = companies.filter(function (company) {
  if (company.category === "Service Based") {
    return true;
  }
});

console.log(companies_after_filter_with_simple_function);

let companies_after_filter_with_arrow_function = companies.filter(
  (company) => company.category === "Service Based"
);

console.log(companies_after_filter_with_arrow_function);

// map
let companies_after_map = companies.map((company, index) => {
  return `${company.category} => ${company.name}`;
});

console.log(companies_after_map);

// sort
let sortAscending = (x, y) => {
  if (x.start > y.start) {
    return 1;
  } else {
    return -1;
  }
};

// let sorted_companies_in_ascending = companies.sort(sortAscending);

// or

// let sorted_companies_in_ascending = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// or

let sorted_companies_in_ascending = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);

console.log(sorted_companies_in_ascending);

// without reduce
let total = 0;
for (let index = 0; index < ages.length; index++) {
  const element = ages[index];
  total += element;
}

console.log(total);

// reduce
let total_with_reduce = ages.reduce(function (total, element, idx) {
  console.log("Iteration = ", idx);
  return total + element;
}, 0);
console.log(total_with_reduce);

let total_with_reduce_arrow_function = ages.reduce(
  (total, element, idx) => total + element,
  0
);
console.log(total_with_reduce_arrow_function);
