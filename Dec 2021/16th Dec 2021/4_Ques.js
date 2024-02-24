// node 4_Ques.js
let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"}
]

// valid candidates females age 20-30 => square their ages => then add => ans = 1360

let ans = arr.filter(v => v.gender == "F" && v.age >= 20 && v.age <= 30).map(v => v.age * v.age).reduce((pv,cv) => {return pv + cv});
console.log(ans);