// node FirstTimer.js --n=10 --d=500

minimist = require("minimist");
args = minimist(process.argv);

let count = args.n;
let time = args.d;

let id = setInterval(function () {
    console.log(count + " time to go.");
    count--;

    if (count == 0) {
        console.log("Timeout.");
        clearInterval(id);
    }
}, time);