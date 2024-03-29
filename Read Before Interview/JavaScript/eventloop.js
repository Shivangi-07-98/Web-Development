console.log("Before");
function fn(){
  console.log("I am fn")
}
setTimeout(fn, 1000);
console.log("After");
while(true){
  console.log("I will run till eternity")
}

// event loop - it sits between callstack and callback queue as soon as a callback arrives inside the queue it continuously checks if the callstack is empty or not as soon as it is empty it pushes the callback into the stack

// but in above case callstack is not empty so this code is never pushed into the stack and hence this function never runs

function fn(){
  console.log("I am fn")
}
setTimeout(fn, 1000);