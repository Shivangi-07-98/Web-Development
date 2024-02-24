// node 4_hoisting.js
// i don't understand this code 
var fun = function(){
    gun();
}

var gun = function(){
    console.log("I am inside gun");
}

fun();

// var fun
// var gun
// fun = function(){
//     gun(); 
// }
// gun = function(){ 
//     console.log("I am inside gun"); // gun is defined below than also it is accessible how?
// }
// fun();