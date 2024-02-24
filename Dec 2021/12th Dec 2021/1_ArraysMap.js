// node 1_ArraysMap.js
// map is itself a fn
// map takes as input a callback fn
// The callback fn takes 3 parameters (v, i, arr)
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v, i and original array to callback
// callback will process the value and index and return a single value
// single value returned by each run of callback will be collected in a new array
// map returns that new array
// length of returned array is equal to original array

let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr = arr.map(function(v, i, oarr){
    console.log(v + "@" + i + "=[" + oarr + "]");
    return v*v;
});

console.log(sqarr);