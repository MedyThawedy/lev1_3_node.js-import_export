import { fnCalculate } from "./myfunction.js";

console.log(fnCalculate(2, 2, '+'));
console.log(fnCalculate(2, 2, '-'));
console.log(fnCalculate(2, 2, '*'));
console.log(fnCalculate(2, 2, '/'));

console.log('-----------------------------------------------------');

console.log(fnCalculate(2, 3, '+'));
console.log(fnCalculate(4, 2, '-'));
console.log(fnCalculate(4, 2, '*'));
console.log(fnCalculate(8, 2, '/'));

console.log('-----------------------------------------------------');

console.log(fnCalculate(22, 12, ''));
