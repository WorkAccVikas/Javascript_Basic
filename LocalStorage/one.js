let key = prompt("Enter key");
console.log(typeof key);
let value = prompt("Enter value");

// * : add key value
localStorage.setItem(key, value);

// * : get value
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// * : to remove particular key
// localStorage.removeItem(key);

// * : to clear whole localstorage
// localStorage.clear()

// * : to get key name from index
// localStorage.key(index)

// * : to get total number of key value in localstorage
// localStorage.length


