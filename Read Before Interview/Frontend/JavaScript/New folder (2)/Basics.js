// node Basics.js

// document.body.innerHTML = 'hello';
console.log(Math.round(2.2));

// strings created with backticks are called template strings
// interpolation is only a feature of template strings
// ${} = insert value directly into the string

// camelCase cartQuantity
// PascalCase CartQuantity
// kebab-case cart-quantity
// snake_case cart_quantity

// Best practice = use const by default

// used ===, !==
// not used ==, !=

// if-else 
// any variable we create inside {} will only exist inside the {} and we cannot use these variables outside the curly brackets. This is called a scope. Scopes help us avoid naming conflicts.
// only let and const follows the rules of scope var does not

// Falsy Values
// 0 '' NaN(Not a Number) undefined null false
// Truthy Values
// except these

// Order of Operations
// 1. (.....)
// 2. * /
// 3. + -
// 4. Comparison operators
// 5. Logical operators like &&, || 

// method
// When we save functions inside an object it is called a method.

// JSON
// const jsonString = JSON.stringify(name);
// JSON.parse(jsonString);

// localStorage
// it only supports strings
// localStorage.setItem('firstname', 'shivangi');
// localStorage.getItem('firstname');

// localStorage.setItem('score', JSON.stringify(score));
// JSON.parse(localStorage.getItem('score'));

// const message = object1.message;
// const {message} = object1;
// this will take the message property out of object 1 and save it in a variable called message

// const object2 = {
//   // message: message
//   message
// };
// both are same

// Number()
// converts string into number
// String()
// converts number into string

// splice(1, 2)
// deletes the value in an array 1st value is index, 2nd value is how many to delete
// array.splice(startIndex, deleteCount, item1, item2, ...)
// item1, item2, ... The elements to add to the array at the startIndex after deleting elements.

// slice()
// makes copy of an array

// continue;
// skips 1 iteration
// in a while loop if we use continue always do the increment step manually or above continue;

// setTimeout(function(){
//    console.log('timeout');
// }, 3000);
// setTimeout will wait for 3 sec and then call this function 