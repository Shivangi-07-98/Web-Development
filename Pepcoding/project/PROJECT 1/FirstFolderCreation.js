// node FirstFolderCreation.js --source=teams.json --dest=worldcup

minimist = require("minimist");
fs = require("fs");
path = require("path");
// kabhi bhi slash khud nahi lgayenge

args = minimist (process.argv);

fs.mkdirSync (args.dest);

JSONfile = fs.readFileSync (args.source);
JSOfile = JSON.parse (JSONfile);

for (i = 0; i < JSOfile.length; i++){

    FolderName = path.join (args.dest, JSOfile[i].name);
    fs.mkdirSync (FolderName);

}
