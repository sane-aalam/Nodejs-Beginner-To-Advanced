// problems
let introduction = ["Hello", "I", "am", "Sarah"];
// let greeting = introduction[0];
// let name = introduction[3];

// console.log(greeting);
// console.log(name);

// Basic Array Destructuring
// good way to
const [greeting, first, second, username] = introduction;
console.log(greeting);
console.log(first);
console.log(second);
console.log(username);

let person = {
  name: "Sarah",
  country: "Nigeria",
  job: "Developer",
  pincode: "01001",
};

// bad way to
// let name = person.name;
// let country = person.country;
// let job = person.job;

// good way to
let { name, country, job, pincode } = person;

console.log(name);
console.log(job);
console.log(parseInt(pincode));
