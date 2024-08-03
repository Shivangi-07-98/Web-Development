// require express
const express = require("express");
// you have to write it -> app signifies your server
const app = express();

// if you want to accept data in backend
app.use(express.json());

// -----------------------------------------------------------------------------------

app.post("/sayhello", function(req, res) {
  console.log("data", req.body);
  res.end("post wala hello from server");
})

// -----------------------------------------------------------------------------------

app.listen(3000, function(){
  console.log("server started at port 3000");
})
// postman is replacement for frontend -> used for backend testing