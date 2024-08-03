// node FirstProcessingHTML.js --source=download.html
// npm install jsdom

let minimist = require ("minimist");
let fs = require ("fs");
let jsdom = require ("jsdom"); // will load html and prepare the dom for programmer just like a browser would have

let args = minimist (process.argv);

fs.readFile(args.source,function(err,html){
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

    let descrip = document.querySelectorAll("div.ds-text-compact-xxs");
    // we will get all div's with class description whose parent is a div with class match-info

    for (let i = 0; i < descrip.length; i++){
        console.log (descrip[i].textContent);
    }
    
});

