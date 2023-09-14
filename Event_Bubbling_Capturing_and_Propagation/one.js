//  * :  example for event bubbling i.e. child to parent
// Todo : When we click on button1 output => 1. button1 clicked 2. div1 clicked
let div1 = document.querySelector("#div1");
console.log(div1);

div1.addEventListener("click", () => {
  console.log("div1 clicked");
});

let button1 = document.querySelector("#button1");
console.log(button1);

button1.addEventListener("click", () => {
  console.log("button1 clicked");
});

// * : event capturing i.e. parent to child (just put "true" in both (parent and child)addEventListener)
// Todo : When we click on button2 output => 1. div2 clicked 2.button2 clicked
let div2 = document.querySelector("#div2");
console.log(div2);

div2.addEventListener(
  "click",
  () => {
    console.log("div2 clicked");
  },
  true
);

let button2 = document.querySelector("#button2");
console.log(button2);

button2.addEventListener("click", () => {
  console.log("button2 clicked");
});

// * : stop propagation
// Todo : here when we click on button3 => output only button3 clicked

let div3 = document.querySelector("#div3");
console.log(div3);

div3.addEventListener("click", () => {
  console.log("div3 clicked");
});

let button3 = document.querySelector("#button3");
console.log(button3);

button3.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button3 clicked");
});

// * : immediate propagation
// Todo : we add stopImmediatePropagation at second event output => 1. button4 first event 2. button4 second event
// Todo : if don't use this output => 1. button4 first event 2. button4 second event 3. button4 third event 4. div4 clicked
let div4 = document.querySelector("#div4");
console.log(div4);

div4.addEventListener("click", () => {
  console.log("div4 clicked");
});

let button4 = document.querySelector("#button4");
console.log(button4);

button4.addEventListener("click", (event) => {
  console.log("button4 first event");
});
button4.addEventListener("click", (event) => {
  // event.stopImmediatePropagation();
  event.stopPropagation(); // * : it will execute all button4 event listener and then stop
  console.log("button4 second event");
});

button4.addEventListener("click", (event) => {
  console.log("button4 third event");
});

// * : preventDefault

let a1 = document.querySelector("#a1");
let a2 = document.querySelector("#a2");

a1.addEventListener("click", () => {
  console.log("first anchor");
});
a2.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("second anchor");
});

let div6 = document.getElementById("div6");
let div6a = document.getElementById("div6a");
let div6b = document.getElementById("div6b");

// Todo : Here { capture: true }, if we click on div6b then Output = div 6 => div6b => div6a
div6.addEventListener("click", (e) => {
  console.log("div 6 clicked");
});

// Todo : Here { capture: true }, if we click on div6b then Output =  div6a => div6b => div 6
div6a.addEventListener(
  "click",
  (e) => {
    console.log("div 6a clicked");
  },
  {
    capture: true,
  }
);

div6b.addEventListener("click", (e) => {
  console.log("div 6b clicked");
});
