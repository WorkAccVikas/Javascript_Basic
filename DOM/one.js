console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
let arr1 = Array.from(document.body.childNodes);
console.log("length = ", arr1.length);

arr1.forEach((e, i) => {
  console.log(e, " = ", i);
});

let a = document.body.firstChild;
console.log(a.firstChild);
console.log(a.firstChild.nextSibling);
