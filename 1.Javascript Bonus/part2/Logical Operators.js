

// Logical Operators Used:
//- && → Logical AND
//- || → Logical OR
//- ! → Logical NOT

function isValidNumber(num) {
  return num > 0 && num % 2 === 0 && num % 5 === 0;
}

console.log(isValidNumber(5));
console.log(isValidNumber(-10));

function isRejected(num) {
  return num < 0 || num % 3 !== 0;
}

console.log(isRejected(-6)); // true
console.log(isRejected(9)); // false
console.log(isRejected(10)); // true

