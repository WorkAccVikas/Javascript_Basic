const container = document.querySelector(".modalContainer");
const button = document.querySelector(".modelButton");

button.addEventListener("click", () => {
  toggleModal(true);
});

function toggleModal(x) {
  container.style.display = x ? "flex" : "none";
}

container.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.className === "modalContainer") toggleModal(false);
});
