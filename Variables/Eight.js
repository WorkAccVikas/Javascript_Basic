// TOPIC : ILLEGAL SHADOWING

let a = 10;
if (true) {
  var a = 10; // !: SyntaxError: Identifier 'a' has already been declared
}


// #2
function fn(x) {
  let a = 10; // 'a' is declared using 'let' (block-scoped)
  if (x) {
    var a = 10; // !: SyntaxError: Identifier 'a' has already been declared
  }
}

fn(0);

// #3 : LEGAL SHADOWING
function fn(x) {
  let a = 10;
  function f2() {
    var a = 20;
    console.log(a);
  }
  console.log(a);
  f2();
}

fn(0);

// #4 

var b = 10;
let b = 20; // ! : ❌ SyntaxError: Identifier 'b' has already been declared
console.log(b);

/** DESC:
 *  1. var b = 10;
 *    - Declares b using var, which is function-scoped (or globally scoped if declared outside a function).
 *    - var variables are hoisted to the top of their scope, meaning they are recognized from the beginning of the execution.
 * 
 *  2. let b = 20;
 *    - Declares b using let, which is block-scoped.
 *    - However, JavaScript does not allow redeclaring the same variable within the same scope using let if it was already declared with var.
 * 
 * 3. Error: Identifier 'b' has already been declared
 *    - The var declaration hoists b to the top of the script.
 *    - When let b = 20; is encountered, JavaScript sees that b was already declared with var earlier and throws a SyntaxError.
 */

// #5
let b = 20;
var b = 10; // ! : ❌ SyntaxError: Identifier 'b' has already been declared
console.log(b);

/** DESC:
 *  1. let b = 20;
 *    - DDeclares b using let, which is block-scoped and cannot be redeclared in the same scope.
 * 
 *  2. var b = 10;
 *    - var is function-scoped and is hoisted to the top, but in this case, it tries to redeclare b in the same scope where b was already declared with let
 * 
 *  3. Conflict Between let and var
 *    - JavaScript does not allow re-declaring a variable with var if it was already declared using let in the same scope.
 *    - This results in a SyntaxError: Identifier 'b' has already been declared
 */
