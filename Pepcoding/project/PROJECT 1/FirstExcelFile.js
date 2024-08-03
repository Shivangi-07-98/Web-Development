// node FirstExcelFile.js --source=teams.json --dest=teams.csv

minimist = require ("minimist");
fs = require ("fs");
excel = require ("excel4node");

args = minimist (process.argv);

JSONkaFile = fs.readFileSync(args.source);
JSOkaFile = JSON.parse(JSONkaFile);

wb = new excel.Workbook();

for (i = 0; i < JSOkaFile.length; i++){
    sheet = wb.addWorksheet(JSOkaFile[i].name);
    sheet.cell(1,1).string("rank");
    sheet.cell(1,2).number(JSOkaFile[i].rank);

    sheet.cell(2,1).string("vs");
    sheet.cell(2,2).string("result");

    for (j = 0; j < JSOkaFile[i].matches.length; j++){
        sheet.cell(3, 1).string(JSOkaFile[i].matches[j].vs);
        sheet.cell(3, 2).string(JSOkaFile[i].matches[j].result);
    }
}

wb.write(args.dest);

