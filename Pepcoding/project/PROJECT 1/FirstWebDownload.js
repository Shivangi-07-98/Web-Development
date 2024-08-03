// node FirstWebDownload.js --dest="download.html" --url=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-schedule-fixtures-and-results
// npm install axios

let minimist = require ("minimist");
let axios = require ("axios");
let fs = require ("fs");

let args = minimist (process.argv);

let DownloadKaPromise = axios.get(args.url);
DownloadKaPromise.then (function(response){
    let golu = response.data;
    fs.writeFileSync(args.dest,golu);
}).catch(function (err){
    console.log(err);
});

