// node FirstFiles.js --source f1.txt --dest f2.txt

let minimist = require ("minimist");
let fs = require ("fs");

let args = minimist (process.argv);

let stext = fs.readFileSync(args.source, "utf-8");
let dtext = stext.toUpperCase();

fs.writeFileSync(args.dest,dtext,"utf-8");
