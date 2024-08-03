// node 2_MapAndFilter.js
let products = [
    {name: "T-shirt", price: 25},
    {name: "Headphones", price: 125},
    {name: "Keyboard", price: 75},
    {name: "Monitor", price: 200}
];

let fres = products.filter(v => v.price >= 100);
// console.log(fres);

let mres = fres.map(v => v.name.toUpperCase());
// console.log(mres);

let uc = products.filter(v => v.price >= 100).map(v => v.name.toUpperCase());
let lc = products.filter(v => v.price <= 100).map(v => v.name.toLowerCase());
// console.log(uc);
// console.log(lc);
let ans = uc.concat(lc);
// console.log(ans);

let ans2 = products.map(function(v){
    if(v.price >= 100){
        return v.name.toUpperCase();
    }
    // else if(v.price <= 100){
    //     return v.name.toLowerCase();
    // }
    else{
        return v.name.toLowerCase();
    }
})
console.log(ans2);