// node 5_ArraySearching.js
// indexOf, lastIndexOf, includes, find, findIndex, filter

// 2
// 9
// true
// 60
// 5
// [ 60, 60 ]

let arr = [10, 20, 30, 40, 50, 60, 60, 50, 40, 30, 20, 10];

let ioRes = arr.indexOf(30); // firstIndex or -1
let lioRes = arr.lastIndexOf(30); // last index or -1
let iRes = arr.includes(30); // true or false

// gives me the first value above 50
let fRes = arr.find(function(v, i, oarr){
    return v > 50;
}); 

// give me index of first value above 50
let fiRes = arr.findIndex(function(v, i, oarr){
    return v > 50;
}); 

// give me all values above 50
let fltrRes = arr.filter(function(v, i, oarr){
    return v > 50;
})

console.log(ioRes);
console.log(lioRes);
console.log(iRes);
console.log(fRes);
console.log(fiRes);
console.log(fltrRes);