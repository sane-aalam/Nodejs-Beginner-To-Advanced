console.log("file is connnected!");

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
// Example-1
// create sum of function
// create a function of passing extra default value (rest all value)

// Noraml function
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 1, 2));

// Rest Operator
function sumMethod(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

const result = sumMethod(1, 2, 4);
console.log(result);

// create a function of passing extra default value (rest all value)

function myFun(value1, value2, ...allOthersValue) {
  console.log("value1 ->", value1);
  console.log("value2 ->", value2);
  console.log("extra ->", allOthersValue); // print all extra elements which store into array
  // Array Destructuring
  const [val3, val4, val5, val6] = allOthersValue;
  console.log("val3 ->", val3);
  console.log("val4 ->", val4);
  console.log("val5 ->", val5);
  console.log("val6 -> ", val6);
}

myFun("one", "two", "three", "four", "five", "six");
