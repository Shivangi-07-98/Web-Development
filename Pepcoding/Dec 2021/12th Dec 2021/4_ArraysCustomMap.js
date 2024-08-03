// node 4_ArraysCustomMap.js
Array.prototype.myMap = function(callback){
    let res = [];

    for(let i = 0; i < this.length; i++){
        let val = this[i];
        let rv = callback(val, i, this); // line 1
        res.push(rv);
    }

    return res;
}

let arr = [2, 5, 9, 8, 15, 11, 6];

let sqarr1 = arr.map((v, i, oarr) => v * v); 
// (v, i, oarr) => v * v callback is returning a value which we're receiving at line 1
console.log(sqarr1);

let sqarr2 = arr.myMap((v, i, oarr) => v * v); 
console.log(sqarr2);