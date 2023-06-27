let x = document.getElementById("some");
x.style.color = "orange";

let y = document.getElementsByClassName("navbar-brand");
console.log(y);
y[0].style.color = "#e53d1a";

let ctitles = document.querySelectorAll(".card-title");
console.log(ctitles);
ctitles[0].style.color = "red";
ctitles[1].style.color = "green";
ctitles[2].style.color = "pink";

document.querySelector(".this").style.color = "black";
document.querySelector(".this").style.backgroundColor = "cyan";

console.log(document.getElementsByTagName("a"));
console.log(document.getElementsByTagName("a").length);
console.log(document.querySelector(".card").getElementsByTagName("a"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[1].getElementsByTagName("a"));
console.log(document.getElementsByName("search"));
console.log(document.getElementsByName("search").length);
console.log(document.getElementsByName("search")[0].tagName);
