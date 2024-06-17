// require express
const express = require("express");
// you have to write it -> app signifies your server
const app = express();
 
app.use(express.json());
app.get("/sayhello", function(req, res){
  res.end("Hello from server");
})
app.get("/saybye", function(req, res){
  res.end("Bye from server");
})

// post route
// req -> represents request
// res -> represents response
app.post("/letme", function(req, res){
  console.log("data", req.body);
  res.end("letme from server");
})
// patch is intended for update
app.patch("/saypatch", function(req, res){
  console.log("data", req.body);
  res.end("patch from server");
})

// delete is intended for deletion
app.delete("/saydelete", function(req, res){
  console.log("data", req.body);
  res.end("delete from server");
})

app.get("/getSquare/:num1/:num2", function(req, res){
  console.log("num1 me data", req.params.num1);
  console.log("num2 me data", req.params.num2);
  // let number = req.params.num;
  let sq = req.params.num1 + req.params.num2;
})









 
// 3000 -> address of a server -> on a given machine
app.listen(3000, function(){
  console.log("server started at port 3000");
})

// if server file is running on same machine -> localhost:3000
// postman is replacement for frontend -> used for backend testing