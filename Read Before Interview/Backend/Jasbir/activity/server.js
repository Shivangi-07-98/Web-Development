const express = require("express");
const app = express();
app.use(express.json());

const UserModel = require('./userModel');

// -----------------------------------------------------------------------------------

app.post("/signup", async function (req, res) {
  let data = req.body;
  console.log(data);
  let newUser = await UserModel.create(data);
  console.log(newUser);
  res.end("my data received");
})

// -----------------------------------------------------------------------------------

app.listen(3000, function(){
  console.log("my server started at port 3000");
})

// postman is replacement for frontend -> used for backend testing