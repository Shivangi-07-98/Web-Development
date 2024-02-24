// node FirstJSONRead.js --source=teams.json
minimist = require ("minimist");
fs = require ("fs");

args = minimist (process.argv);

fs.readFile (args.source, function (err,ReadHuaData){
    if (err){
        console.log (err);
    }else{
        let golu = JSON.parse(ReadHuaData); // JSON to JSO
        console.log (golu [1].matches [1].vs);
    }
})
