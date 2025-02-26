// TOPIC : Which loop is faster
// LINK : https://chatgpt.com/share/c1576585-93bd-4527-8d31-c9c49c3b40f1

// RESULT : 1. for 2. forEach 3. for of 4. for in

const array = Array(1000000).fill(0);

// POINT : for loop

console.time("Traditional for loop");
for (let i = 0; i < array.length; i++) {
  array[i] = i * 2;
}
console.timeEnd("Traditional for loop");

/** DESC : 
 *  - TIME : 2.5 - 6 ms
 */

// POINT : for in loop

console.time("for...in loop");
for (const index in array) {
  if (array.hasOwnProperty(index)) {
    array[index] = index * 2;
  }
}
console.timeEnd("for...in loop");

/** DESC : 
 *  - TIME : 170 - 300 ms
 */

// POINT : for of loop

console.time("for...of loop");
for (const [index, element] of array.entries()) {
  array[index] = index * 2;
}
console.timeEnd("for...of loop");

/** DESC : 
 *  - TIME : 22 - 50 ms
 */

// POINT : forEach loop

console.time("forEach loop");
array.forEach((element, index) => {
  array[index] = index * 2;
});
console.timeEnd("forEach loop");


/** DESC : 
 *  - TIME : 9 - 20 ms
 */
