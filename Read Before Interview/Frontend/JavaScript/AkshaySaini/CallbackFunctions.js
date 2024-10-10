// What is a callback function in javascript---------------------------------

// A function passed into another function. The function that is passed into another function is called a callback function
// These callback functions gives us access to the whole asynchronous world in a synchronous single threaded language
// Javascript is a synchronous single threaded language which means it can only do one thing at a time in a specific order => but due to callbacks we can do async things inside javascript


// garbage collection and removeEventListeners---------------------------

// Event listeners are heavy they takes up memory
// When you remove this event listener then all these variables which were held by closures will be garbage collected
