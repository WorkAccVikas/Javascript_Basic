let firstDiv = document.querySelector("#first");
console.log(firstDiv);

firstDiv.insertAdjacentHTML(
  "beforebegin",
  '<div class="test">beforebegin</div>'
);
firstDiv.insertAdjacentHTML("beforeend", '<div class="test">beforeend</div>');
firstDiv.insertAdjacentHTML("afterbegin", '<div class="test">afterbegin</div>');
firstDiv.insertAdjacentHTML("afterend", '<div class="test">afterend</div>');
// firstDiv.remove();
