// node ErrorHandling.js

// try block contains the code that might throw an error
try{
    const result = undefinedVariable + 10;
    console.log(result);
}
//catch block is where the error is handled
catch(error){
    console.log(error.message);
}
// Output
// undefinedVariable is not defined