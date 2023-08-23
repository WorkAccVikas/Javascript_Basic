const arr1 = [1, 2, 3, [[[4, 5]]]];

const r1 = arr1.flat(); // * : by default depth = 1
console.log(r1);

const r2 = arr1.flat(3);
console.log(r2);

const r3 = arr1.flat(Infinity);
console.log(r3);

// NOTE: If we pass depth negative then return same array
const r4 = arr1.flat(-2);
console.log(r4);

// NOTE: If we pass depth -Infinity then return same array
const r5 = arr1.flat(-Infinity);
console.log(r5);

/** DESC :
 *  Link 1 : https://www.youtube.com/watch?v=aCpkKmCPzFw&ab_channel=AkashIngole
 *  Link 2 : https://chat.openai.com/share/1a06dd86-7885-4017-8866-6603644c0431 (see last solution)
 */
Array.prototype.myFlat = function (depth = 1) {
  let res = [];
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not function`);
  }
  this.forEach((element) => {
    if (Array.isArray(element)) {
      if (depth === Infinity) {
        res.push(...element.myFlat(Infinity)); // Flatten infinitely
      } else if (depth > 0) {
        res.push(...element.myFlat(depth - 1));
      } else {
        res.push(element);
      }
    } else {
      res.push(element);
    }
  });
  return res;
};

const r11 = arr1.myFlat(); // * : by default depth = 1
console.log(r11);

const r12 = arr1.myFlat(3);
console.log(r12);

const r13 = arr1.myFlat(Infinity);
console.log(r13);

// NOTE: If we pass depth negative then return same array
const r14 = arr1.myFlat(-2);
console.log(r14);

// NOTE: If we pass depth -Infinity then return same array
const r15 = arr1.myFlat(-Infinity);
console.log(r15);
