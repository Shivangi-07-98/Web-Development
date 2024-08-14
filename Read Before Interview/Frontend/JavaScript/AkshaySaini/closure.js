function x(){
  var a = 7;
  function y(){
    console.log(a);
  }
  a = 100;
  return y;
}

var z = x();
// console.log(z);
z();


// example of closure-------------------------------------
function outer(){
  var a = 10;
  function inner(){
    console.log(a);
  }
  return inner;
}

// outer()();
var close = outer();
close();


// imp ques of setTimeout + closure-------------------------------
function x(){

  for(var i = 1; i <= 5; i++){

    function close(x){
      setTimeout(function(){
        console.log(x);
      }, x * 1000);
    }
    close(i);

  }
  console.log("Hello");
  
}
x();
