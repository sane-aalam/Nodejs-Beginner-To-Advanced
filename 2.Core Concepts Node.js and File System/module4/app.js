

const calculator = require("./utils/calculator");
const ValidatorSignData = require("./utils/ValidatorMethod");

const sum = calculator.add(5, 2);
const difference = calculator.subtract(10, 2);

const user = ValidatorSignData(
  "Piyush",
  "sir",
  "Piyushsir@gmail.com",
  "piyush@123"
);

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log(user);

// module.exports lets you expose functions or values from your custom module.
// You can export one or many functions.
// You can also use ES6 export/import if using "type": "module" in package.json.
