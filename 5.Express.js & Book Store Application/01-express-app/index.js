const express = require("express");
const app = express();
const port = 3000;

// middleware
const authLogin = function (req, res, next) {
  console.log("logged user!");
  next();
};

app.get("/", authLogin, (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  // request body
  // const data = req.body;
  // query parameters
  // const { name,studentId } = req.query;
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
