// node FirstWritingPDF.js --source=teams.json --dest="Sample Worldcup"

minimist = require ("minimist");
fs = require ("fs");
path = require ("path");
pdf = require ("pdf-lib");

args = minimist (process.argv);

fs.mkdirSync (args.dest);

JSONfile = fs.readFileSync (args.source);
JSOfile = JSON.parse (JSONfile);

for (i = 0; i < JSOfile.length; i++){
    teamFN = path.join (args.dest, JSOfile[i].name);
    fs.mkdirSync (teamFN);

    for (j = 0; j < JSOfile[i].matches.length; j++){
        OpponentFN= path.join (teamFN, JSOfile[i].matches[j].vs + ".pdf");
        golu (JSOfile[i].name, JSOfile[i].matches[j], OpponentFN);
    }
}
function golu (TeamName, match, OpponentFN){
    let t1 = TeamName;
    let t2 = match.vs;
    let result = t1 + " " + match.result;

    let originalBytes = fs.readFileSync("SampleTemplate.pdf");
    let pdfdocKaPromise = pdf.PDFDocument.load(originalBytes);
    pdfdocKaPromise.then (function(pdfdoc){
        let page = pdfdoc.getPage(0);
        page.drawText(t1,{
            x : 335,
            y : 670,
            size : 15
        });
        page.drawText(t2,{
            x : 335,
            y : 635,
            size : 15
        });
        page.drawText(result,{
            x : 335,
            y : 600,
            size : 15
        });
        let changedBytesKaPromise = pdfdoc.save();
        changedBytesKaPromise.then(function (changedBytes){
            fs.writeFileSync(OpponentFN, changedBytes);
        });

    });
    
}

