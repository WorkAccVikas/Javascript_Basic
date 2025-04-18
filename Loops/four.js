// LINK : https://chatgpt.com/share/6802696c-04f4-800f-8b6c-5c05b87cd57d
// TOPIC : while loop

let n = 3;
let i = 0;
while (i < n) {
  console.log(i);
  i++;
}

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

// Todo : do while loop
let n1 = 3;
let j = 0;
do {
  console.log(j);
  j++;
} while (j < n1);
