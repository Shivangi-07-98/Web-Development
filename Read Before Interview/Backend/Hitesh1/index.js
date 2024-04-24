require('dotenv').config();
const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) => {
  res.send("hey i am new")
})

app.get('/youtube', (req, res) => {
  res.send("<h1>I am on youtube</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`app is listening on port ${process.env.PORT}`)
})