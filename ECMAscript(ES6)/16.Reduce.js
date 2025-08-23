// reduce method in javascript

const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// curr = 10 + 0  = 10
// curr = 10 + 20 = 30
// curr = 30 + 30 = 60
// curr = 40 + oldValue (60)  = 100;

const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);
