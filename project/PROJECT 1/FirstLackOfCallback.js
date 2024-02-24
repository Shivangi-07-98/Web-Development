// node FirstLackOfCallback.js --source=big.data --n=5000000
// task1 = read a file (disk)
// task2 = calculate primes (cpu)
// task2 will be done after task1, which is not good

function PRIME (n){
    golu = true;
    for (div = 2; div * div <= n; div++){
        if (n % div == 0){
            golu = false;
            break;
        }
    }
    return golu;
}

let minimist = require ("minimist");
let fs = require ("fs");

let args = minimist (process.argv);

// task 1
let t1 = Date.now();
console.log (t1 % 100000);

let task1 = fs.readFileSync (args.source);

let t2 = Date.now();
console.log (t2 % 100000);
console.log ("task1 time taken " + (t2-t1) % 100000);
// task 1

// task 2
let t3 = Date.now();
console.log (t3 % 100000);

let task2 = [];
for (i = 2; i <= args.n; i++){
    prime = PRIME (i);
    if (prime == true){
        task2.push(i);
    }
}

let t4 = Date.now();
console.log (t4 % 100000);
console.log ("task2 time taken " + (t4-t3) % 100000);
// task 2

totaltime = ((t2-t1) + (t4-t3)) % 100000;
console.log ("total time taken for both tasks " + totaltime);
