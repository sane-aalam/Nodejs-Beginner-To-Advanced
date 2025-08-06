// Problem-1
// Problem: Check if a character is a vowel and lowercase

function isLowercaseVowel(char) {
  return (
    ("aeiou".includes(char) && char === char.toLowerCase()) ||
    ("AEIOU".includes(char) && char == char.toUpperCase())
  );
}

console.log(isLowercaseVowel("a")); // true
console.log(isLowercaseVowel("A")); // false
console.log(isLowercaseVowel("b")); // false

// Problem2
// Search an element in unsorted array
function LinearSerchAlgorithm(arr, targetValue) {
  let arrlength = arr.length;
  let index = 0;

  while (index < arrlength) {
    if (arr[index] == targetValue) {
      return index;
    }
    index++;
  }
  return -1;
}

let arr = [11, 12, 35, 1919, 1910, 98, 10, 5, 1];
let targetValue1 = 5;
let targetValue2 = 1;
let targetValue3 = 1919;

const indexResult1 = LinearSerchAlgorithm(arr, targetValue1);
const indexResult2 = LinearSerchAlgorithm(arr, targetValue2);
const indexResult3 = LinearSerchAlgorithm(arr, targetValue3);

console.log(indexResult1);
console.log(indexResult2);
console.log(indexResult3);
