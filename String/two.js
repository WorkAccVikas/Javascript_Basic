// Todo : String Method

let name = "VikasCh";
let word = "Sachin";
let friend = "Amit";
let friend2 = "             Raju           ";

// * : 1. length
console.log(`Length = ${name.length}`);

// * : 2. Upper Case
console.log(`Upper Case = ${name.toUpperCase()}`);

// * : 3. Lower Case
console.log(`Lower Case = ${name.toLowerCase()}`);

// * : 4. Slice
let s1 = "Apple, Banana, Kiwi";
console.log(`Slice till end = ${name.slice(2)}`);
console.log(`Slice till end = ${name.slice(2, 2)}`);
console.log(`Slice to specific position = ${name.slice(2, 4)}`);
console.log(`Slice to specific position = ${name.slice(4, 2)}`);
console.log(`Slice to specific position = ${name.slice(-4, 1)}`);
console.log(`Slice to specific position = ${name.slice(1, -4)}`);
console.log(`Slice -ve from start with end of string = ${s1.slice(-1)}`);
console.log(`Slice -ve from start with end of string = ${s1.slice(-2)}`);
console.log(
  `Slice -ve from start source index and end with other index =${s1.slice(
    -6,
    -2
  )}`
);
let s5 = "Please give me Rs 1000";
console.log(`amount = ${s5.slice("Please give me Rs ".length)}`);

// * : 5. Substring
console.log(`Substring text = ${name.substring(2, 2)}`);
console.log(`Substring text = ${name.substring(2, 4)}`);
console.log(`Substring text = ${name.substring(4, 2)}`);
console.log(`Substring text = ${s1.substring(7, 13)}`);
console.log(`Substring text = ${s1.substring(7, -13)}completed`);
console.log(`Substring text = ${s1.substring(-13, 7)}completed`);

// * : 6. Substr
console.log(
  `substr text here, second parameter specifies the length of the extracted part =${s1.substr(
    7,
    6
  )}`
);
console.log(
  `substr text here, If the first parameter is negative, the position counts from the end of the string=${s1.substr(
    -4
  )}`
);

console.log(
  `substr text here, If the first parameter is positive, the counts the end of the string=${s1.substr(
    2
  )}`
);

// * : 7. replace
// Todo : Regular expressions are written without quotes.
let s2 = "Please visit Microsoft and Microsoft!";
console.log(
  `replace for all occurrence = ${s2.replace(/Microsoft/g, "W3Schools")}`
);
console.log(`replace default = ${s2.replace("Microsoft", "W3Schools")}`);
console.log(`replace default = ${s2.replace("MICROSOFT", "W3Schools")}`);
console.log(`replace default = ${s2.replace(/MICROSOFT/i, "W3Schools")}`);

console.log(`Replace = ${word.replace("Sa", "Cha")}`);

// * : 8. Replace All
let s3 = "I love cats. Cats are very easy to love. Cats are very popular";
console.log(s3.replaceAll("Cats", "Dogs"));
console.log(s3.replaceAll("cats", "dogs"));
// above 2 and below two are same only difference is below we use Regex
console.log(s3.replaceAll(/Cats/g, "Dogs"));
console.log(s3.replaceAll(/cats/g, "dogs"));

// * : 9. Concat
console.log(
  `Concat String = ${name.concat(" is a friend of ", friend, " ok")}`
);
let fullName = "Vikas" + " Kailas" + " Chandlekar";
console.log(fullName);

// * : 10. trim
console.log(`Value = ${friend2}, length = ${friend2.length}.`);
let x1 = friend2.trim();
console.log(`Value of trim() = ${x1}, length = ${x1.length}.`);
let x2 = friend2.trimStart();
console.log(`Value of trimStart() = ${x2}, length = ${x2.length}.`);
let x3 = friend2.trimEnd();
console.log(`Value of trimEnd() = ${x3}, length = ${x3.length}.`);

// * : 11. padStart & padEnd
let s4 = "Hi";
console.log(`padStart() = ${s4.padStart(4, "x")}`);
console.log(`padEnd() = ${s4.padEnd(4, "x")}`);

// * : 12. Extract char from string
console.log(`1 index character using charAt = ${x1.charAt(1)}`);
console.log(`1 index character using charAt = ${x1.charAt(-1)}`); // ! : return Empty string
console.log(`1 index character without using charAt = ${x1[1]}`);
console.log(`1 index character without using charAt = ${x1[-1]}`); // ! : return undefined
console.log(`1 index character with charCodeAt = ${x1.charCodeAt(1)}`);
console.log(String.fromCharCode(97));

const sentence =
  "The commercial aviation industry suffered 39 total accidents in 2022, an increase from 29 in 2021. aviation";
const sentence1 = "The rain in SPAIN stays mainly in the plain";
const word1 = "aviation";
const word3 = "Aviation";
// * : 13. include
console.log(sentence.includes(word1));
console.log(sentence.includes(word3));
console.log(sentence.includes('tion'));
console.log(
  `The word "${word1}" ${
    sentence.includes(word1) ? "is" : "is not"
  } in the sentence`
);

// * : 14. search
const sentence2 =
  "The commercial aviation industry suffered 39 total accidents in 2022, an increase from 29 in 2021. aviation";
console.log(sentence2.search("aviation"));
console.log(sentence2.search("Aviation"));
console.log(sentence2.search("tion"));

// * : 15. match
console.log(sentence.match("in"));
console.log(sentence.match(/in/g));
console.log(sentence1.match("ain"));
console.log(sentence1.match(/ain/));
console.log(sentence1.match(/ain/g));
console.log(sentence1.match(/ain/gi));

// * : 16. indexOf & lastIndexOf
console.log(sentence1.indexOf("in"));
console.log(sentence1.indexOf("xx"));
console.log(sentence1.lastIndexOf("in"));
console.log(sentence1.lastIndexOf("xx"));

let sentence3 = "Ram,Vikas,Shyam,Tom";
// * : 17. split
console.log(
  `split() = ${sentence3.split(",")}, type = ${typeof sentence3.split(",")}`
);

// * : 18. repeat
console.log(sentence3.repeat(2));

// * : 19. toSting
let x4 = 50;
console.log(20 + x4);
console.log(20 + x4.toString());

// * : 20. startsWith & endsWith
let word2 = "Ramesh";
console.log(`${word2} start with R = ${word2.startsWith("R")}`);
console.log(`${word2} start with r = ${word2.startsWith("r")}`);
console.log(`${word2} end with h = ${word2.endsWith("h")}`);
console.log(`${word2} end with H = ${word2.endsWith("H")}`);

// *: 21. valueOf
let x5 = 5;
console.log(`x5 = ${x5.valueOf()}, type = ${typeof x5.valueOf()}`);
let x6 = "50";
console.log(`x6 = ${x6.valueOf()}, type = ${typeof x6.valueOf()}`);
let x7 = [10, "20"];
console.log(`x7 = ${x7.valueOf()}, type = ${typeof x7.valueOf()}`);
