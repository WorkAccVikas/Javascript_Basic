// Todo : switch case

/** LEARN :
 *  - If you don't break then it not check for following case and execute till default
 *  - Strict comparison
 */

// let day = "Thursday";
// let day = "friday";
// let day = "monday";
let day = "God";

switch (day) {
  case "Sunday":
    console.log(`Today 1 = ${day}`);
    break;
  case "Monday":
  case "monday":
    console.log(`Today 2 = ${day}`);
    break;
  case "Tuesday":
    console.log(`Today 3 = ${day}`);
    break;
  case "Wednesday":
    console.log(`Today 4 = ${day}`);
    break;
  case "Thursday":
    console.log(`Today 4 = ${day}`);
    break;
  case "Friday":
  case "friday":
    console.log(`Today 5 = ${day}`);
    break;
  case "Saturday":
    console.log(`Today 6 = ${day}`);
    break;
  default:
    console.log(`Default`);
}
console.log("end");

/** DESC :
 *  - CASE 1 : let day = "Thursday"; & each case have break
 *     - o/p : Today 4 = Thursday, end
 * 
 *  - CASE 2 : let day = "Thursday"; & each case have break expect at Thursday
 *     - o/p : Today 4 = Thursday, Today 5 = Thursday, end

 *  - CASE 3 : let day = "Thursday"; & each case have break expect at Sunday, Thursday, Friday, Saturday
 *     - o/p : Today 4 = Thursday, Today 5 = Thursday, Today 6 = Thursday, Default, end
 * 
 * - CASE 4 : let day = "God"; & each case have break or not break at all cases
 *     - o/p : Default, end
 * 
 * - CASE 5 : let day = "friday"; & each case have break
 *     - o/p : Today 5 = friday, end
 * 
 * - CASE 6 : let day = "friday"; & each case have break expect at Friday
 *     - o/p : Today 5 = friday, Today 6 = friday, end
 * 
 * - CASE 7 : let day = "friday"; & each case have break expect at Friday, Saturday, Sunday
 *     - o/p : Today 5 = friday, Today 6 = friday, Default, end
 * 
 * - CASE 8 : let day = "monday"; & each case not have break
 *     - o/p : Today 2 = monday, Today 3 = monday, Today 4 = monday, Today 5 = monday, Today 6 = monday, Default, end
 * 
 * - CASE 9 : let day = "monday"; & break only at Wednesday
 *     - o/p : Today 2 = monday, Today 3 = monday, Today 4 = monday, end
 * 
 * - CASE 10 : let number = 1; & each case have break
 *     - o/p : 1, end2
 * 
 * - CASE 11 : let number = "1"; & each case have 
 *     - o/p : Default2, end2
 * 
 */

// const number = 1;
const number = "1";

switch (number) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  case 4:
    console.log("4");
    break;
  case 5:
    console.log("5");
    break;
  default:
    console.log("Default2");
}

console.log("end2");
