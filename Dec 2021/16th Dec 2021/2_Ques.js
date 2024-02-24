// node 2_Ques.js

let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], // 50, 90, 100, 60
    [10, 51, 70, 80, 90, 100, 30, 60], // 90, 100, 60
    [11, 50, 75, 85, 92, 100, 34, 60], // 100, 60
    [10, 50, 70, 80, 90, 100, 30, 60] // 100, 60
];

let ans = arr2d.reduce((pv, cv) => {
    // return cv.includes(pv); wrong
    return pv.filter(v => cv.includes(v));
});
console.log(ans);