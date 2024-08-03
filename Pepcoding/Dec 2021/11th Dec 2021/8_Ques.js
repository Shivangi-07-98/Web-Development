// node 8_Ques.js
//  0  1  2  3
// [10 20 30 40]

// 01 02 03 04
// 12 13 14
// 23 24
// 34

let arr = [10, 20, 30, 40];

for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j <= arr.length; j++){
        console.log(arr.slice(i,j));
    }
}