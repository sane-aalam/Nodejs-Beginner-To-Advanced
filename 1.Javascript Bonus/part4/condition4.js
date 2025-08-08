const password = "abc123";

if (password.length >= 12) {
  console.log("Strong password");
} else if (password.length >= 6) {
  console.log("Medium strength password");
} else {
  console.log("Weak password");
}
