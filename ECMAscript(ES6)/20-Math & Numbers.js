// Math.trunc
// Math.sign
// Math.cbrt
// Math.log2
// Math.log10
// Number.EPSILON
// Number.MIN_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER
// Number.isInteger()
// Number.isSafeInteger()

console.log("Math.trunc(4.9):", Math.trunc(4.9));
console.log("Math.sign(-5):", Math.sign(-5));
console.log("Math.cbrt(27):", Math.cbrt(27));
console.log("Math.log2(16):", Math.log2(16));
console.log("Math.log10(1000):", Math.log10(1000));

let sum = 0.1 + 0.2;
console.log("0.1 + 0.2 =", sum);
console.log("Equal to 0.3?", Math.abs(sum - 0.3) < Number.EPSILON);

console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // INT_MAX CPP
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // INT_MIN CPP

console.log("isInteger(10):", Number.isInteger(10));
console.log("isInteger(10.5):", Number.isInteger(10.5));
console.log(
  "isSafeInteger(9007199254740991):",
  Number.isSafeInteger(9007199254740991)
);
console.log(
  "isSafeInteger(9007199254740992):",
  Number.isSafeInteger(9007199254740992)
);
