let firstDiv = document.querySelector("#first");
let secondDiv = document.querySelector("#second");
let thirdDiv = document.querySelector("#third");

// * : add
firstDiv.className = "text-white bg-blue"; //!: it will override existing class
firstDiv.classList.add("font-25");
firstDiv.classList.add("italic");

// Todo : if class attribute not present in html element then also it will add class
thirdDiv.classList.add("font-25");

// Todo : class list
let secondDivClassList = secondDiv.classList;
console.log(secondDivClassList);

// *: remove
secondDiv.classList.remove("italic");

// *: contains => T / F
let checkClassExist = secondDiv.classList.contains("bg-yellow");
console.log(checkClassExist);
let checkClassExist1 = secondDiv.classList.contains("text-center");
console.log(checkClassExist1);

// *: toggle
thirdDiv.classList.toggle("italic");
firstDiv.classList.toggle("italic");
