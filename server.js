const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const http = require("http");
const fs = require("fs");
const app = express();

const hostname = "localhost";
const port = 3000;

fs.readFile("index.html", (err, html) => {
  if (err) {
    throw err;
  }
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log("Server running on port" + port);
  });
});

// app.use(bodyparser.json());

//DB config
// const db = require("./config/keys").mongoURI;
//Connect to mongodb
// mongoose
//   .connect(db)
//   .then(() => console.log("mongo db connected..."))
//   .catch(err => console.log(err));

//maybe deployed to heroku so use 'process.env.PORT'
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log("server started on port ${port}"));
