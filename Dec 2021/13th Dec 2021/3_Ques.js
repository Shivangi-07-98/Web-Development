// node 3_Ques.js
let arr = [5, 83, 24, 67, 71, 12, 24, 7];

let fres = arr.filter(v => v*v <= 1000).map(v => v*v*v);
// console.log(fres);

let ans = arr.filter(v => v*v*v <= 10000).map(v => v*v*v);
console.log(ans);

