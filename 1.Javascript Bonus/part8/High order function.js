// HOF: takes function as argument
function greet(name, callback) {
  return callback(name);
}

function sayHello(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice", sayHello)); 


