const MOON = "🌙";
const SUN = "☀️";
const DARK_MODE = "dark";
const LIGHT_MODE = "light";
const DEFAULT_MODE = DARK_MODE;

const btn = document.querySelector("#theme-switcher");

init();

function init() {
  let storedMode = sessionStorage.getItem("mode");
  console.log("In init = ", storedMode);
  if (!storedMode) {
    storedMode = DEFAULT_MODE;
    sessionStorage.setItem("mode", DEFAULT_MODE);
  }
  setMode(storedMode);
}

function setMode(mode = DEFAULT_MODE) {
  console.log("In setMode");
  if (mode === DARK_MODE) {
    btn.textContent = SUN;
    document.body.classList.add(DARK_MODE);
  } else if (mode === LIGHT_MODE) {
    btn.textContent = MOON;
    document.body.classList.remove(DARK_MODE);
  }
}

btn.addEventListener("click", function () {
  let mode = sessionStorage.getItem("mode");
  if (mode) {
    let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
    console.log(newMode);
    setMode(newMode);
    sessionStorage.setItem("mode", newMode);
  }
});
