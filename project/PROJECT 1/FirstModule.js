// node FirstModule.js --name "shivangi kumari" --age 24  
let minimist = require ("minimist");
let args = minimist (process.argv);

// let name = args.name;
// let age = args.age;

if (args.age > 30){
console.log ("hello " + args.name + ". You must go home.");
}else{
console.log ("heya " + args.name + ". Where is the party tonight?");
}