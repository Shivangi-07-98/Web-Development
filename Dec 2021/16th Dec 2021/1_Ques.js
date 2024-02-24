// node 1_Ques.js

let a1 = [10, 30, 50, 70, 90];
let a2 = [63, 34, 50, 90, 80, 10, 60];
// [10, 50, 90]

console.log(a2.includes(80));
console.log(a2.includes(88));

let inter1 = a1.filter(v => a2.includes(v));
console.log(inter1);