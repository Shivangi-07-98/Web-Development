// node FirstFunction.js 16
 args = process.argv;
 n = parseInt(args[2]);

for ( i = 2; i <= n; i++){
     prime = PRIME(i);
    if (prime == true){
        console.log(i);
    }
}
function PRIME (i){
     prime = true;
    for (div = 2; div * div <= i; div++){
        if (i % div == 0){
            prime = false;
            break;
        }
    }
    return prime;
}