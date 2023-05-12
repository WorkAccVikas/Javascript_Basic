// Todo: Insertion Method in DOM
let container = document.getElementsByTagName("div")[0];
// *: this is old way
// a.innerHTML = a.innerHTML + "<h1><b>Hello World</b></h1>";

// *: new way
// *: appendChild
let div2 = document.createElement("div");
div2.innerHTML = "<h2>Second Div</h2>";
const appendChildValue = container.appendChild(div2);
console.log(appendChildValue);
// container.appendChild("Congrats");  //! error

// *: append
let div3 = document.createElement("div");
div3.innerHTML = "<h2>Third Div</h2>";
const appendValue = container.append(div3);
console.log(appendValue);
let div4 = document.createElement("div");
div4.innerHTML = "<h2>Fourth Div</h2>";
let div5 = document.createElement("div");
div5.innerHTML = "<h2>Fifth Div</h2>";
container.append(div4, div5);
container.append("Congrats");

// *: prepend
let div6 = document.createElement("div");
div6.style.backgroundColor = "red";
div6.innerHTML = "<h2>Six PrependDiv</h2>";
container.prepend(div6);
container.prepend("Prepend String");
container.prepend("<i>Italic Prepend String</i>");
let div7 = document.createElement("div");
div7.style.backgroundColor = "red";
div7.innerHTML = "<h2>Seven PrependDiv</h2>";
let div8 = document.createElement("div");
div8.style.backgroundColor = "red";
div8.innerHTML = "<h2>Eight PrependDiv</h2>";
container.prepend(div7, div8);

// *: before
let div9 = document.createElement("div");
div9.style.backgroundColor = "yellow";
div9.innerHTML = "<h2>Nine BeforeDiv</h2>";
container.before(div9);
container.before("Before String");
container.before("<i>Italic Before String</i>");
let div10 = document.createElement("div");
div10.style.backgroundColor = "yellow";
div10.innerHTML = "<h2>Ten BeforeDiv</h2>";
let div11 = document.createElement("div");
div11.style.backgroundColor = "yellow";
div11.innerHTML = "<h2>Eleven BeforeDiv</h2>";
container.before(div10, div11); // ? : add only single element

//*: after
let div12 = document.createElement("div");
div12.style.backgroundColor = "blue";
div12.style.color = "white";
div12.innerHTML = "<h2>Twelve AfterDiv</h2>";
container.after(div12);
container.after("After String");
container.after("<i>Italic After String</i>");
let div13 = document.createElement("div");
div13.style.backgroundColor = "blue";
div13.style.color = "white";
div13.innerHTML = "<h2>Thirteen AfterDiv</h2>";
let div14 = document.createElement("div");
div14.style.backgroundColor = "blue";
div14.style.color = "white";
div14.innerHTML = "<h2>Fourteen AfterDiv</h2>";
container.after(div13, div14);

// *: replaceWith
let div15 = document.createElement("div");
div15.style.backgroundColor = "orange";
div15.style.color = "white";
div15.innerHTML = "<h2>Fifteen ReplaceWithDiv</h2>";
// container.replaceWith(div15);
// container.replaceWith("ram");
