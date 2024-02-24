// node Pattern.js 5
let args = process.argv;
let n = parseInt (args [2]);

for (i = 1; i <= n; i++){
        line = " ";
    for (j = 1; j <= i; j++){
        line += "*\t";
    }
    console.log (line);
}
