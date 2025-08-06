// Deep Drive into JavaScript(variable)
// var: Historically, var was the primary keyword used to declare variables in JavaScript. However, it has some quirks and limitations, particularly related to variable scope, which we will discuss later.
// let: Introduced in ECMAScript 6 (ES6), let provides better scoping rules and is generally preferred over var for declaring variables within a block scope.
// const: Also introduced in ES6, const is used to declare variables that should never be reassigned after their initial value is assigned. It is commonly used for declaring constants.

let getName = "Spider-Man";
console.log("before hero name -", getName);
getName = "Peter Parker";
console.log("after hero name -", getName);

const heroName = "Captain America: Civil War";
// heroName = "HulkMan";
// console.log(heroName);
//! TypeError: Assignment to constant variable.

var globalVar = 42;

function myFunction1() {
  console.log(globalVar); // Accessible
}

myFunction1();

function myFunction2() {
  var localVariableName = "Local variable";
  console.log(localVariableName); // Accessible
}

myFunction2();

console.log(localVariableName);
// Not accessible (throws an error)
