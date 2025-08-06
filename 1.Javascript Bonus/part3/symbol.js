const user = {
  name: "Name-Aalam",
  age: 22,
};

const secretToken = Symbol("token");
user[secretToken] = "abc123xyz";

// Accessing the symbol-based property
console.log(user.name);
console.log(user[secretToken]); // "abc123xyz"
console.log(user);
