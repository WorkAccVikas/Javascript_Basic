// Todo : switch case

let day = "Tuesday";
// let day = "God";

switch (day) {
  case "Sunday":
    console.log(`Today ${day}`);
    break;
  case "Monday":
    console.log(`Today ${day}`);
    break;
  case "Tuesday":
    console.log(`Today ${day}`);
    break;
  default:
    console.log(`Enjoy`);
}
console.log("end");

// NOTE : It check comparison only once and if not break then it not check for following case and execute till default