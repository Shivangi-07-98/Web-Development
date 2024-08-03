// node FirstWritingJSON.js --dest=teams.json
minimist = require ("minimist");
fs = require ("fs");

args = minimist (process.argv);

let TEAMS = [
    {
        name : "India",
        rank : 1,
        matches : [
            {
                vs : "Australia",
                result : "Won",
            },
            {
                vs : "England",
                result : "Won",
            }
        ]
    },
    {
        name : "Australia",
        rank : 3,
        matches : [
            {
                vs : "India",
                result : "Lost",
            },
            {
                vs : "England",
                result : "Won",
            }
        ]
    },
    {
        name : "England",
        rank : 2,
        matches : [
            {
                vs : "Australia",
                result : "Loss",
            },
            {
                vs : "India",
                result : "Loss",
            }
        ]
    }
    
];

let json = JSON.stringify(TEAMS); // JSO to JSON
fs.writeFileSync (args.dest, json, "utf-8");

// stringify converts JSO to JSON.
// JSO can't be printed or saved.