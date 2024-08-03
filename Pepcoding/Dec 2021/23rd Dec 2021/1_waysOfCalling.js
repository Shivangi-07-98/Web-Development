// node 1_waysOfCalling.js
let obj = {
    fun1: function(frnd1, frnd2){
        console.log("This person is called " + this.fullname + ". His/Her age is " + this.age + ".");
        console.log(this.fullname + " says hello to " + frnd1 + ".");
        console.log(this.fullname + " says hello to " + frnd2 + ".");

        console.log(arguments);
    },
    fullname: "Sumeet Malik",
    age: 34
};

// obj.fun1("Navdeep", "Vikas");

let o2 = {
    fullname: "Neha",
    age: 33
};

// obj.fun1.call(o2, "Mehwish", "Shailja");
// obj.fun1.apply(o2, ["Mehwish", "Shailja", "Supriya"]);
let boundFunction = obj.fun1.bind(o2, "Mehwish", "Shailja", "Supriya");
boundFunction("Sumeet");

// call is a function. It is available on all functions. It can be used to call the functions.
// the use case is, if you want to override the default this

// apply is similar to call. It just uses an array to pass arguments.

// bind is dis-similar. It doesn't make a call. It gives you a new function to call.

// arr = [10, 20, 30, 40, 50]
// ...arr = 10, 20, 30, 40, 50