

// DSA(problem1)
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
