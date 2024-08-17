// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// // -----------------------------------------------------------

// let score = "33abc"
// console.log(typeof score); // string

// let value = Number(score);
// console.log(typeof value); // number
// console.log(value); // NaN (not a number)
// // convert hogya number mai but print krate tym NaN show ho rha

// // -----------------------------------------------------------

// console.log("1" + 1);
// console.log("1" + 1 + 1);

// console.log(1 + "1" + 1 + 1);
// console.log(1 + 1 + "1" + 1 + 1);
// console.log(1 + 1 + 1 + "1" + 1);
// console.log(1 + 1 + 1 + 1 + "1");

// // -----------------------------------------------------------

// console.log(null == 0); // this is not comparison
// console.log(null > 0);
// console.log(null >= 0); // comparisons convert null to a number, treating it as 0

// // -----------------------------------------------------------

// console.log("2" > 1); // true
// console.log("1" >= 1); // true

// // -----------------------------------------------------------

// // stack and heap concept 
// // using primitive data type and you'll see its value doesn't change because it doesn't use reference but copies 

// let golu = "intelligent";
// let chunnu = golu;
// chunnu = "dumb";
// console.log(chunnu);
// console.log(golu);

// // value is changed now because value does not copy it uses reference
// let golu1 = {
//   quality: "intelligent"
// }

// let chunnu1 = golu1;

// chunnu1.quality = "dumb";
// console.log(chunnu1);
// console.log(golu1);

// // -----------------------------------------------------------

// // spread operator
// let start = [1, 2, 3]
// let end = [4, 5, 6]
// let all = [...start, ...end]
// console.log(all);

// // -----------------------------------------------------------


// // Object literals

// const Sym = Symbol("key1");
// // let Sym;

// const user = {
//   name: "golu",
//   "age": 18,
//   "contact number": "abc",
//   [Sym]: "mykey1"
//   // contact number: "abc"
// }

// // console.log(user.name);
// // console.log(user.age);
// // console.log(user.contact number); // wrong

// // console.log(user["name"]);
// // console.log(user["age"]);
// console.log(user["contact number"]);
// console.log(user[Sym]);
// console.log(user);


// // -----------------------------------------------------------



