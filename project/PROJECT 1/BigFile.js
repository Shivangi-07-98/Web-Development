// node BigFile.js --dest=big --n=20
let minimist = require ("minimist");
let fs = require ("fs");

let args = minimist (process.argv);

n = args.n;

value = [];
for (i = 1; i <= n; i++){   // still prints starting from 1
    value.push(i);
}
console.log (value);  // value also comes fine

let golu = value.join(","); // imp line

fs.writeFileSync(args.dest,golu);
