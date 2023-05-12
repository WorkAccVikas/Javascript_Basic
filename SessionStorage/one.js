// * : Storage Event
window.setItem("id", "1");

window.onstorage = (e) => {
  console.log("changed");
  console.log(e);
};
