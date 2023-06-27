let containerDiv = document.getElementsByClassName("container")[0];

// *: It will override onclick in html file
containerDiv.onclick = () => {
  console.log("In Js onclick");
};

containerDiv.addEventListener("click", () => console.log("In js Click 1"));
