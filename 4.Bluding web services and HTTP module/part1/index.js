const http = require("node:http");
const port = 999;

const server = http.createServer(function (req, res) {
  if (req.url === "/home") {
    res.end("home page!");
  }
  res.end("server done");
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
