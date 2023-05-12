// Todo : Note App
let n = localStorage.getItem("note");
alert("Your note is " + n);

let a = prompt("Enter your note");
if (a) {
  localStorage.setItem("note", a);
} else {
  console.log("User not entered note");
}

let c = confirm("Do you want to delete your note?");
if (c) {
  localStorage.removeItem("note");
  alert("Note deleted successfully!");
} else {
  console.log("User click on cancel button");
}
