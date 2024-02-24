// node 1_Ques.js
let arr = [51, 23, 37, 44, 73, 82, 97, 45]; // [23, 37, 73, 97]
// count all primes using reduce

// without reduce
let count = 0;

for(let a = 0; a < arr.length; a++){
    if(isPrime(arr[a]) == true){
        count++;
    };
}

function isPrime(num){
    for(let i = 2; i*i <= num; i++){
        if((num % i) == 0){
            return false;
        }
    }
    return true;
}

console.log(count);

// with reduce
let ans = arr.reduce(function(counter, num){
    if(isPrime(num) == true){
        return ++counter;
    }else{
        return counter;
    }
}, 0);

function isPrime(num){
    for(let i = 2; i*i <= num; i++){
        if((num % i) == 0){
            return false;
        }
    }
    return true;
}

console.log(ans);