// Function Declaration
// Function Statement aka Function Declaration
function a(){
  console.log("a called");
}
a();
// a function statement should always have a name otherwise it will be a syntax error

// Function Expression-------------------------
var b = function (){
  console.log("b called");
}
b();
// this b is treated like any other variable it is assigned undefined in the beginning until the code executes

// diff b/w function statement and function expression


// Anonymous Function--------------------------
// function without name 
// it is used in a place where functions are used as values

// Named Function Expression-------------------
var c = function xyz(){
  console.log("c called");
}
c();
xyz(); // gived error => xyz is not defined


// Difference between Parameters and Arguments?-----------------------------
var d = function (param1, param2){// these are parameters
  console.log("d called");
}
d(1, 2); // these are arguments


// First Class Functions or First Class Citizens
// the ability of functions to be used as values and can be passed as an argument to another function and can be returned from the function - this ability is known as first class functions

// Arrow Functions
