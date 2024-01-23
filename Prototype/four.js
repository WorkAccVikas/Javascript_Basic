// LINK : https://www.youtube.com/watch?v=n6lSxTgOm40&ab_channel=SamMeech-Ward

const arr1 = [1, 2, 3, 4];

console.log(Object.getOwnPropertyNames(arr1)); // * : [ '0', '1', '2', '3', 'length' ]
console.log(arr1.length); // * : 4
console.log(Object.getOwnPropertyNames(arr1).length); // * : 5

const prototype = Object.getPrototypeOf(arr1);
console.log(prototype); // * : []
console.log(Object.getOwnPropertyNames(prototype));

/** 
 * 
 [
  'length',      'constructor',    'concat',
  'copyWithin',  'fill',           'find',
  'findIndex',   'lastIndexOf',    'pop',
  'push',        'reverse',        'shift',
  'unshift',     'slice',          'sort',
  'splice',      'includes',       'indexOf',
  'join',        'keys',           'entries',
  'values',      'forEach',        'filter',
  'flat',        'flatMap',        'map',
  'every',       'some',           'reduce',
  'reduceRight', 'toLocaleString', 'toString',
  'at',          'findLast',       'findLastIndex'
 ]
 */
