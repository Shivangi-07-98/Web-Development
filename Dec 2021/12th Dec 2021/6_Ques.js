// node 6_Ques.js
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

// ages of all the ladies [24, 44, 28, 47]

let ans1 = arr.filter(function(v, i, oarr){
    if(v.gender == 'F'){
        return true;
    }
    else{
        return false;
    }
});
let Fans = ans1.map(function(v, i, oarr){
    return v.age;
});
console.log(Fans);

let ans2 = arr.filter(function(v, i, oarr){
    if(v.gender == 'F'){
        return true;
    }
    else{
        return false;
    }
}).map(function(v, i, oarr){
    return v.age;
});
console.log(ans2);

let ans3 = arr.filter((v) => v.gender == 'F').map((v) => v.age);
console.log(ans3);