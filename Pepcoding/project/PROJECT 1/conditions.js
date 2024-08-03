// node conditions.js 7
let args = process.argv;
let n = parseInt (args[2]);

if (n % 2 == 0){
    console.log (n + " is even");
}else{
    console.log (n + " is odd");
}