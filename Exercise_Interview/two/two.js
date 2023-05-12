// Todo : String Anagram

let string1 = "hello";
let string2 = "olleh";
// let string2 = "olllh";

const isAnagram = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  let counter = {};
  for (let i of s1) {
    console.log(i);
    console.log(counter[i]);
    counter[i] = (counter[i] || 0) + 1;
    console.log(counter[i]);
  }
  console.log(counter);

  for (let j of s2) {
    console.log(j);
    console.log(counter[j]);
    console.log(j, " => ", counter[j]);
    if (!counter[j]) {
      console.log("Here = ", counter[j]);
      return false;
    }

    // counter[j] = counter[j] - 1;
    counter[j] -= 1;
    console.log(j, " <=> ", counter[j]);
    // console.log(counter[j]);
  }
  console.log(counter);
  return true;
};

(async () => {
  console.time("anagram");
  let r1 = await isAnagram(string1, string2);
  console.log(r1);
  console.timeEnd   ("anagram");
  console.log(
    `String 1 = ${string1}\nString 2 = ${string2}\n${
      !r1 ? "No Anagram" : "Yes Anagram"
    }`
  );
})();
