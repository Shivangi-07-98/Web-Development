// node CricInfoExtracterPractice.js --excel=Worldcup2019.csv --dataDir="WORLDCUP 2019" --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-schedule-fixtures-and-results
// node (File Name) (Excel) (Folders) (source)
// The purpose of this project is to extract information of worldcup 2019 from cricinfo and present
// that in the form of excel and pdf scorecards. The real purpose is to learn how to extract information
// and get experience with js. A very good reason to ever make a project is to have good fun.

// npm init -y
// npm install minimist
// npm install axios - download html using axios
// npm install jsdom - read using jsdom
// npm install excel4node - make excel using excel4node
// npm install pdf-lib - make pdf using pdf-lib

let minimist = require("minimist");
let axios = require("axios"); 
let jsdom = require("jsdom");
let excel4node = require("excel4node");
let pdf = require("pdf-lib");
let fs = require("fs");
let path = require("path");

// Browser = url to html
// (url se http request -> server ne html in http response)

let args = minimist(process.argv);

let responseKaPromise = axios.get(args.source);
responseKaPromise.then(function (response) {
    let html = response.data;
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

    let matchScoreDivs = document.querySelectorAll("div.ds-p-0 > div.ds-p-4 > div.ds-flex");
    // console.log(matchScoreDivs.length);
    let matches = [];
    for (let i = 0; i < matchScoreDivs.length; i++) {
        let match = {
            t1: " ",
            t2: " ",
            t1s: " ",
            t2s: " ",
            result: " ",
            // details: " "
        };
        let teamParas = matchScoreDivs[i].querySelectorAll("div.ds-flex.ds-flex-col.ds-mt-2.ds-mb-2 div[title]");
        match.t1 = teamParas[0].textContent;
        match.t2 = teamParas[1].textContent;

        let scoreSpans = matchScoreDivs[i].querySelectorAll("div.ds-flex.ds-flex-col.ds-mt-2.ds-mb-2 strong");
        // let overs = matchScoreDivs[i].querySelectorAll("div.ds-flex.ds-flex-col.ds-mt-2.ds-mb-2 span");

        // if(overs.length == 2){
        //     match.t1s = overs[0].textContent;
        //     match.t2s = overs[1].textContent;
        // }
        // else if(overs.length == 1){
        //     match.t1s = overs[0].textContent;
        //     match.t2s = " ";
        // }
        // else{
        //     match.t1s = " ";
        //     match.t2s = " ";
        // }


        if (scoreSpans.length == 2) {
            match.t1s = scoreSpans[0].textContent;
            match.t2s = scoreSpans[1].textContent;
        }
        else if (scoreSpans.length == 1) {
            match.t1s = scoreSpans[0].textContent;
            match.t2s = " ";
        }
        else {
            match.t1s = " ";
            match.t2s = " ";
        }

        let resultSpan = matchScoreDivs[i].querySelector("p.ds-text-tight-s.ds-font-regular.ds-line-clamp-2.ds-text-typo span");
        match.result = resultSpan.textContent;

        // let details = matchScoreDivs[i].querySelector("div.ds-text-tight-xs.ds-truncate.ds-text-typo-mid3");
        // match.details = details.textContent;

        matches.push(match);
    }
    let matchesKaJSON = JSON.stringify(matches);
    fs.writeFileSync("matches.json", matchesKaJSON);
    // console.log (matches);

    let teams = [];
    for (let i = 0; i < matches.length; i++) {
        addTeamToTeamsArrayIfNotAlreadyThere(teams, matches[i].t1);
        addTeamToTeamsArrayIfNotAlreadyThere(teams, matches[i].t2);
    }

    for (let i = 0; i < matches.length; i++) {
        addMatchToSpecificTeam(teams, matches[i].t1, matches[i].t2, matches[i].t1s, matches[i].t2s, matches[i].result);
        addMatchToSpecificTeam(teams, matches[i].t2, matches[i].t1, matches[i].t2s, matches[i].t1s, matches[i].result);
    }

    let teamsKaJSON = JSON.stringify(teams);
    fs.writeFileSync("teams.json", teamsKaJSON, "utf-8");
    prepareExcel(teams, args.excel);
    prepareFoldersAndPDFs(teams, args.dataDir);
})

function prepareFoldersAndPDFs(teams, dataDir) {
    if (fs.existsSync(dataDir) == true) {
        fs.rmdirSync(dataDir, { recursive: true });
    }
    fs.mkdirSync(dataDir);
    for (let i = 0; i < teams.length; i++) {
        let teamFolderName = path.join(dataDir, teams[i].name);
        fs.mkdirSync(teamFolderName);

        for (let j = 0; j < teams[i].matches[j].length; j++) {
            let match = teams[i].matches[j];
            createMatchScorecardPDFs(teamFolderName, team[i].name, match);
        }
    }
}
function createMatchScorecardPDFs(teamFolderName, homeTeam, match) {
    let matchFileName = path.join(teamFolderName, match.vs);

    let templateFileBytes = fs.readFileSync("Template.pdf");
    let pdfdocKaPromise = pdf.PDFDocument.load(templateFileBytes);
    pdfdocKaPromise.then(function (pdfdoc) {
        let page = pdfdoc.getPage(0);

        page.drawText(homeTeam, {
            x: 320,
            y: 703,
            size: 9
        });
        page.drawText(match.vs, {
            x: 320,
            y: 688,
            size: 9
        });
        page.drawText(match.selfScore, {
            x: 320,
            y: 673,
            size: 9
        });
        page.drawText(match.oppScore, {
            x: 320,
            y: 658,
            size: 9
        });
        page.drawText(match.result, {
            x: 320,
            y: 648,
            size: 9
        });
        let changedBytesKaPromise = pdfdoc.save();
        changedBytesKaPromise.then(function (changedBytes) {
            if (fs.existsSync(matchFileName + ".pdf") == true) {
                fs.writeFileSync(matchFileName + "1.pdf", changedBytes);
            }
            else {
                fs.writeFileSync(matchFileName + ".pdf", changedBytes);
            }
        }) 
    })
}
function prepareExcel(teams, excelFileName) {
    let wb = new excel4node.Workbook();
    for (let i = 0; i < teams.length; i++) {
        let tsheet = wb.addWorksheet(teams[i].name);

        tsheet.cell(1, 1).string("vs");
        tsheet.cell(1, 2).string("Self Score");
        tsheet.cell(1, 3).string("opp Score");
        tsheet.cell(1, 4).string("Result");

        for (let j = 0; j < teams[i].matches.length; j++) {
            tsheet.cell(2 + j, 1).string(teams[i].matches[j].vs);
            tsheet.cell(2 + j, 1).string(teams[i].matches[j].SelfScore);
            tsheet.cell(2 + j, 1).string(teams[i].matches[j].oppScore);
            tsheet.cell(2 + j, 1).string(teams[i].matches[j].Result);
        }
    }
    wb.write(excelFileName);
}
function addTeamToTeamsArrayIfNotAlreadyThere(teams, teamName){
    let tidx = -1;
    for( let i = 0; i < teams.length; i++){
        if(teams[i].name == teamName){
            tidx = i;
            break; 
        }
    }
    if(tidx == -1){
        teams.push({
            name: teamName,
            matches: []
        })
    }
}

function addMatchToSpecificTeam(teams, homeTeam, oppTeam, selfScore, oppScore, result){
    let tidx = -1;
    for(let i = 0; i < teams.length; i++){
        if(teams[i].name == homeTeam){
            tidx = i;
            break;
        }
    }
    let team = teams[tidx];
    team.matches.push({
        vs: oppTeam,
        selfScore: selfScore,
        oppScore: oppScore,
        result: result 
    })
} 