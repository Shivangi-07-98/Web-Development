// node CreateBigFile.js --dest=big.data --n=50000000
let minimist = require ("minimist");
let fs = require ("fs");

let args = minimist (process.argv);

n = args.n;

value = [];
for (i = 0; i < n; i++){
    value.push(i);
}

let golu = value.join(","); // imp line

fs.writeFileSync(args.dest,golu);
fs.appendFileSync(args.dest,golu);
fs.appendFileSync(args.dest,golu);
fs.appendFileSync(args.dest,golu);
