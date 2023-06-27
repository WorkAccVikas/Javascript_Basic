let div_first = document.getElementById("first");

// Todo : getAttribute
let a = div_first.getAttribute("class");
console.log(a);

// Todo : hasAttribute =>  T / F
console.log(div_first.hasAttribute("class"));
console.log(div_first.hasAttribute("placeholder"));

// Todo : setAttribute
// div_first.setAttribute("hidden", "true");
div_first.setAttribute("name", "firstOne");
// !: bad practice because it will remove existing attributes
// div_first.setAttribute("class", "bg-red");
// *: use this :  it will not override existing attributes
div_first.classList.add("bg-red");

// Todo : removeAttribute
// div_first.removeAttribute("class");

// Todo : attributes
let x1 = div_first.attributes;
console.log(x1);
console.log(x1.length);
// iterate
Array.from(x1).forEach((e) => console.log(e));

// Todo : dataset
let x2 = div_first.dataset;
console.log(x2);
console.log(x2.length);
console.log(Array.from(x2)); //! : Wrong way
// iterate
for (let i in x2) {
  console.log(`${i} => ${x2[i]}`);
}

console.log(x2.game);
console.log(x2.player);
