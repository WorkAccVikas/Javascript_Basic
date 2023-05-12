// const hello = require("./one.js");
// const { add, mul } = require("./two");
// const x = require("./three");

import hello from "./one.js";
import { add, mul } from "./two.js";
import x from "./three.js";
import vikas from "./four.js";

console.log(hello());
console.log(add(1, 2));
console.log(mul(5, 5));
console.log(x.sub(75, 5));
console.log(x.div(52, 5));
console.log(vikas());
