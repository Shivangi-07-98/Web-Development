// node 3_Ques.js
function f(x){
    return x*x;
}

function g(x){
    return x+10;
}

function h(x){
    return 2*x;
}

let farr = [f, g, h]; // [h, g, f]
let x = 10;

// f(g(h(x))) = f(g(2x)) = f(2x + 10) = 4x^2 + 40x = 900
// (2x + 10)(2x + 10) = 4x^2 + 40x + 100
// 4x^2 + 40x + 100 = 400 + 400 + 100 = 900

let ans1 = farr.reduce(function(pv, cv){
    return cv(pv);
}, x);
// console.log(ans1);

// 10, f
// f(10), g
// g(f(10)), h
// h(g(f(10)))

let ans2 = farr.reverse().reduce(function(pv, cv){
    return cv(pv);
}, x);
console.log(ans2);

// 10, h
// h(10), g
// g(h(10)), f
// f(g(h(10)))
