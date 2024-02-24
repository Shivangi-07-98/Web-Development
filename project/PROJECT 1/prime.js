// node Prime.js 7
let args = process.argv;
let n = parseInt (args [2]);

let prime = true;
for(div = 2; div*div <= n; div++){
    if(n % div == 0){
        prime = false;
        break;
    }
}
if (prime == true){
    console.log(n + " is prime");
}else {
    console.log(n + " is not prime");
}