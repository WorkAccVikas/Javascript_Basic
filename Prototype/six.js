// Array.prototype.city = "New York";
const arr1 = [1, 2, 3, 4];

const proto1 = Object.getPrototypeOf(arr1);
console.log(proto1); // * : []

console.log(arr1.hasOwnProperty("0")); // * : true

console.log(Object.getOwnPropertyNames(arr1)); // * : [ '0', '1', '2', '3', 'length' ]

console.log(arr1.hasOwnProperty("length")); // * : true
console.log(arr1.hasOwnProperty("city")); // * : false
console.log(arr1["city"]); // * : "New York" when Line1 uncommented otherwise undefined

console.log(Object.getOwnPropertyNames(proto1));

/**
[
  "length",  "constructor",  "concat",  "copyWithin",  "fill",
    "find",  "findIndex",  "lastIndexOf",  "pop",  "push", 
     "reverse",  "shift",  "unshift",  "slice",  "sort",  
     "splice",  "includes",  "indexOf",  "join",  "keys",  
     "entries",  "values",  "forEach",  "filter",  "flat",  
     "flatMap",  "map",  "every",  "some",  "reduce",  "reduceRight",  
     "toLocaleString",  "toString",  "at",  "findLast",  "findLastIndex",];
 */
