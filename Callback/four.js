function x() {
  let button1 = document.getElementById("button1");
  button1.addEventListener("click", function cb() {
    let count = 0;
    console.log("button1 clicked", ++count);
  });
}
// x();

// ! : problem here count value not increment when we try to button click many time
