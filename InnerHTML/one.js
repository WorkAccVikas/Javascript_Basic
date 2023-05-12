let x = document.getElementsByTagName("span")[0];
console.log(x);
// console.dir(x);
console.log(document.body.firstChild);
console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.data);
console.log(document.body.firstElementChild.nodeName);
let span_first = document.getElementById("first");
console.log(span_first.innerHTML);
console.log(span_first.innerText);
console.log(span_first.outerHTML);
console.log(span_first.outerText);
console.log(span_first.textContent);
// *: all text of webpage
console.log(document.body.textContent);
// *: it will hide the element
// span_first.hidden = true;
