// node 1_MapVsFilter.js
let arr = [12, 11, 43, 56, 34, 76, 89, 55];

let mres = arr.map(v => v % 2 == 1);  // [f, t, t, f, f, f, t, t]
let fres = arr.filter(v => v % 2 == 1);  // [11, 43, 89, 55]

console.log(mres);
console.log(fres);