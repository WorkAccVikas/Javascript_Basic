let div_first = document.getElementById("first");
let a = div_first.getAttribute("class");
console.log(a);
console.log(div_first.hasAttribute("class"));
console.log(div_first.hasAttribute("placeholder"));
// * : set attribute
// div_first.setAttribute("hidden", "true");
// !: bad practice because it will remove existing attributes
// div_first.setAttribute("class", "bg-red");
// *: use this :  it will not override existing attributes
div_first.classList.add("bg-red");

// div_first.removeAttribute("class");

let x1 = div_first.attributes;
console.log(x1);
// iterate
Array.from(x1).forEach((e) => console.log(e));

let x2 = div_first.dataset;
console.log(x2);
// iterate
for (let i in x2) {
  console.log(`${i} => ${x2[i]}`);
}

console.log(x2.game);
console.log(x2.player);
