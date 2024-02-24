// node FirstArray.js 6 98 56 7 9 26 8
args = process.argv;
n = parseInt (args[2]);
arr = [];
for (i = 0; i < n; i++){
    value = parseInt (args[i + 3]);
   arr [i] = value;
   // arr.push (value);
}
for (i = 0; i < arr.length; i++){
   console.log (arr[i]);
}
console.log (arr);
console.log (arr.length);