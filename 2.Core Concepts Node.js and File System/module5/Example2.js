// (function () {
// All the code of the module is runs here
// })();

(function (exports, require, module, __filename, __dirname) {
  // Module code
  const fs = require("fs");

  function readFileExample() {
    try {
      const content = fs.readFile("data.txt", "utf-8");
      console.log("File content:", content);
    } catch (error) {
      console.log("error:", error);
    }
  }
  readFileExample();
});
