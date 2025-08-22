(function () {
  console.log("IIFE executed!");
})();

(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice");
