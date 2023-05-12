// Guess the number
// visit replit
function randomIntFromOneToHundred(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let chance = 0;
let total_chances = 3;
while (chance < total_chances) {
  let userNumber = prompt("enter the number ");
  userNumber = Number.parseInt(userNumber);
  const randomNumber = randomIntFromOneToHundred(1, 10);
  console.log(`Random Number = ${randomNumber}`);
  if (userNumber == randomNumber) {
    console.log(
      `Congrats... you entered number = ${userNumber} & random number = ${randomNumber}`
    );
  }
  chance += 1;
  console.log(`Wrong Number, Random Number = ${randomNumber}`);
  console.log(`Chances remaining = ${total_chances - chance}`);
}
console.log(`Sorry your ${total_chances} chances over`);
