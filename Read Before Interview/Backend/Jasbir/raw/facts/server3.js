// require express
const express = require("express");
// you have to write it -> app signifies your server
const app = express();

// if you want to accept data in backend
app.use(express.json());

// -----------------------------------------------------------------------------------

app.post("/simple", function bodyChecker(req, res, next) {
  let data = req.body;
  let length = Object.keys(data).length;
  if(length == 0){
    res.end("Kindly enter data in the body");
  } else {
    next();
  }
})

app.post("/simple", function(req, res) {
  console.log("data", req.body);
  res.end("simple post output");
})

// -----------------------------------------------------------------------------------

app.listen(3000, function(){
  console.log("server started at port 3000");
})
// postman is replacement for frontend -> used for backend testing