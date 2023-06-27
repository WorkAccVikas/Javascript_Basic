let button1 = document.getElementById("btn1");

let firstFunction = (e) => {
  console.log("First Function = ", e.target.value);
  console.log(e);
  console.log(e.target);
  console.log(e.target.value);
  console.log("textContent = ", e.target.textContent);
};
let secondFunction = (e) => {
  console.log("Second Function = ", e.target.value);
};
// *: add eventListener
button1.addEventListener("click", firstFunction);

let button2 = document.getElementById("btn2");

button2.addEventListener("click", secondFunction);
button2.addEventListener("click", () => {
  console.log("Second Event at button2");
});

// *: remove eventListener
let a = prompt("If you want to remove button 2 eventListener then enter 2.");

if (a == "2") {
  // Todo : here, remove one click eventlistener
  button2.removeEventListener("click", secondFunction);
} else if (a == "0") {
  // Todo : here, remove all click eventlistener
  const clonedElement = button2.cloneNode(true);
  button2.parentNode.replaceChild(clonedElement, button2);
}
