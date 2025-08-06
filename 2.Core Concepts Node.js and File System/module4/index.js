const bcrypt = require("bcrypt");
const saltRounds = 10;

const password = "user_password";

bcrypt.genSalt(saltRounds, function (error, salt) {
  bcrypt.hash(password, salt, function (err, hash) {
    if (err) {
      console.log(err);
    } else {
      // $2b$10$AiAHFLAICIZQyFi9CGnsnulLxTJurnW1rwUqxoOHpQHZgka8IumXmv
      console.log(hash);
    }
  });
});

// Hash the password
const hashedPassword = bcrypt.hashSync(password, 10);
console.log("Hashed:", hashedPassword);

// Compare password
const isMatch = bcrypt.compareSync(password, hashedPassword);
console.log("Password Match:", isMatch);


console.log("End of code!");
