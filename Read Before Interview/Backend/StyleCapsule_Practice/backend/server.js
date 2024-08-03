const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 2005;
const MONGODB_URI = process.env.MONGODB_URI;

const auth = require("./router/authRouter");
app.use("/api", auth);


// app.get("/", (req, res) => {
//   res.send("server started");
// })

mongoose.connect(MONGODB_URI)
.then(
  () => {
    console.log("mongodb connected");

    app.listen(PORT, () => {
      console.log(`server is listening at port ${PORT}`)
    })

  }


).catch(
    (err) => {
      console.error('Error connecting to MongoDB:', err.message);
    }
  )

