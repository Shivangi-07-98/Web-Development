// node 2_ArrayConstructions.js

let arr1 = [10, 20, 30];
console.log(arr1);

let arr2 = Array.of(10);
console.log(arr2);

let arr3 = Array.of(10, 20, 30, 40, 50);
console.log(arr3);

let arr4 = Array.from("sumeet"); // array like objects (for instance strings, nodelist, arguments)
console.log(arr4);