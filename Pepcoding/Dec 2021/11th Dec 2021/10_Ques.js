// node 10_Ques.js
// prime no. = 1, khud se divide hota h 

let arr1 = [5, 6, 7, 8, 9, 10]; // primes are = 5,7,
//         0  1  2  3  4   5

let arr2 = [10,47,15,17,92,97,93,31,46,54] // primes are = 47,17,97,31 

for(let i = arr2.length-1; i >= 0; i--){
    
    let boolean = isPrime(arr2[i]);
    if (boolean == true){
        arr2.splice(i, 1);
    } 
}

function isPrime(val){
    for(let j = 2; j*j <= val; j++){

        if(val % j == 0){
           return false;
        }
        
    }
    return true;
}
    
console.log(arr2); // [6, 8, 9, 10]