let b1 = document.getElementById("ORANGE");
let b2 = document.getElementById("GREEN");

function clickHere(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

b1.onclick = clickHere("orange");
b2.onclick = clickHere("green");
