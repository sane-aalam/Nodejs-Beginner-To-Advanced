// Creating a Set
// Setting a value in set
// No duplicates allowed
// Values can be any type (primitive or object)
// Maintains insertion order

const duplicateChecker = new Set([1, 2, 3, 3, 4]);
console.log(duplicateChecker);

// duplicate 3 removed
duplicateChecker.add(5);
duplicateChecker.add(2);

// checking the value is present or not
console.log(duplicateChecker.has(3)); // true
console.log(duplicateChecker.has(10)); // false

// deleting the Values
duplicateChecker.delete(2);

// Size of Set
console.log("size", duplicateChecker.size);

// removed duplicate data of cuisines(in restuaturant)
const cuisines = ["Pizza", "Burger", "Pizza", "Chinese", "Burger"];
const uniqueCuisines = [...new Set(cuisines)];

console.log(uniqueCuisines); // ["Pizza", "Burger", "Chinese"]
