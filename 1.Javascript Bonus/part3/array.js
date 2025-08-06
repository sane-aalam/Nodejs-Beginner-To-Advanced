//* That modify the array:
// array.reverse - Reverse the order of the elements of the array.
// array.shift - Remove the first element from the array.
// array.sort - Sort the elements of the array.
// array.splice - Add or remove elements from the array.
// array.unshift - Add one or more elements to the front of the array.
// Accessor Methods
// That return some representation of the array:

// array.concat - Join the array with other array(s) or value(s).
// array.join - Join all elements of the array into a string.
// array.slice - Extract a section of the array.
// array.indexOf - Find the first occurrence of a value within the array.
// array.lastIndexOf - Find the last occurrence of a value within the array.

// Iteration Methods
// That apply functions to elements in the array:
// array.filter - Create a new array with only the elements for which a predicate is true.
// array.forEach - Call a function for each element in the array.
// array.every - See if every element in the array satisfies a predicate.
// array.map - Create a new array with the result of a function of every element in the array.
// array.some - See if at least one element in the array satisfies a predicate.
// array.reduce - Apply a function to reduce the array to a single value (from left-to-right).
// array.reduceRight - Apply a function to reduce the array to a single value (from right-to-left).

// slice Method
// It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
// It’s similar to a string method str.slice

// Array handbook short-clean-code
// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()
// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function (item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function (item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function (item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function (item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
