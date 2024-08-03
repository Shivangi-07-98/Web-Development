// node 12345Ques.js
let arr = [2, 3, 4, 5, 6, 7, 8, 9]; // even = 2,4,6,8 odd = 3,5,7,9

let even = [];
let odd = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        even.push(arr[i]);
    }
    else{
        odd.push(arr[i]);
    }
}
let ans = even.concat(odd);
console.log(ans);

// console.log("even = " + even);
// console.log("odd = " + odd);