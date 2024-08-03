// node FirstCallback.js --source=big.data --n=5000000
// task1 = read a file (disk)
// task2 = calculate primes (cpu)
// task2 will be done in parallel with task1, which is good

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
console.log ("task1 started at " + t1 % 100000 );

// let task1 = fs.readFileSync (args.source);
fs.readFile(args.source, function(err,task1){
    if (err == null){
        let t2 = Date.now();
        console.log ("task1 finished at " + t2 % 100000 );
        console.log ("total time " + (t2-t1));
        // console.log ("task1 time taken " + (t2-t1));
    }else{
        console.log ("error happened");
    }
});
// task 1

// task 2
let t3 = Date.now();
console.log ("task2 started at " + t3 % 100000 );

let task2 = [];
for (i = 2; i <= args.n; i++){
    prime = PRIME (i);
    if (prime == true){
        task2.push(i);
    }
}

let t4 = Date.now();
console.log ("task2 finished at " + t4 % 100000 );
// console.log ("task2 time taken " + (t4-t3));
// task 2


// console.log ("total time " + t2-t1);    it can't be printed here (inside callback function)
