// #1
var a = 10;
var a = 20;
console.log(a); // 20

// #2 : 
// ! : SyntaxError: Identifier 'b' has already been declared
var b = 10;
let b = 20;
console.log(b); 

// #3 : 
// ! : SyntaxError: Identifier 'c' has already been declared
var c = 10;
const c = 20;
console.log(c);

// #4 : 
// ! : SyntaxError: Identifier 'd' has already been declared
let d = 10;
var d = 20;
console.log(d);