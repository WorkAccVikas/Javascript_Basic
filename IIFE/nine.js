// "use strict";

(function () {
  var a = "Ram";
  let b = "Seeta";
  const c = "Laxman";
  d = "Ravan";
})();

/** DESC :
 *  - Only variable d is access outside
 *  - Other var, let, const show error : not defined
 */
console.table({ d });
