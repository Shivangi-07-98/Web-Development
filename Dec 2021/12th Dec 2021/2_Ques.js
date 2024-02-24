// node 2_Ques.js
let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
];

let ans = arr.map(function(v, i, oarr){
    let a = v.split(" ");
    fname = a[0];
    lname = a[1];
    fi = fname[0];
    li = lname[0];
    let b = (fi + "." + li + ".");
    return b;
});

console.log(ans);