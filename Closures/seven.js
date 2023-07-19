let b1 = document.getElementById("ORANGE");
let b2 = document.getElementById("GREEN");
let b3 = document.getElementById("BLUE");
let b4 = document.getElementById("PINK");

function clickHere(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
    // todo : or
    // document.body.style.backgroundColor = color;
  };
}
// ! : not expected working
function clickHereNotExpectedWorking(color) {
  document.body.style.backgroundColor = `${color}`;
}

b1.onclick = clickHere("orange");
b2.onclick = clickHere("green");
b4.onclick = clickHereNotExpectedWorking("pink");

b3.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});
