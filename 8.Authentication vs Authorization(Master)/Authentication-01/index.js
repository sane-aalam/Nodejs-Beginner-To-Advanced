import express from "express";
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Validation for password
const validatePassword = (password) => {
  var passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  var valid = passwordRegex.test(password);
  return valid;
};

// The variable dairyAvaiable is initialized
// Using Store uniqueEmails
const dairyAvaiable = {};
const uniqueEmails = new Set();

app.get("/", (req, res) => {
  res.json({
    msg: "POSTMAN is running!",
  });
});

app.post("/signup", (req, res) => {
  // json data
  // Suhail-Khan
  // suhailkhan@gmail.com
  // suhailkhan@123
  const { name, email, password } = req.body;
  console.log(name, email, password);

  if (!validatePassword(password)) {
    return res.status(400).json({
      error: "Invalid Password!",
    });
  }

  if (email in dairyAvaiable) {
    return res.status(400).json({
      error: "Email alredy taken for this car!",
    });
  }

  // generate the token
  const token = `${Date.now()}`;
  dairyAvaiable[token] = { name, email, password };
  uniqueEmails.add(email);

  return res.status(201).json({
    error: "new car is parked into dairy!",
    massage: true,
    token: token,
    container: uniqueEmails,
  });
});

// algorithm
// when i came back to take my car
// then i need to give token
// if token is matched then only you can take car
// edges case-1 toekn invalid
// edges case-2 missing token - give token through is given or not
// edges case-3 you found the same token into db
app.post("/validateCarToken", (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({
      error: "Missing Token!",
      msg: false,
    });
  }
  if (!token in dairyAvaiable) {
    return res.status(400).json({
      error: "Invalid Token!",
      msg: false,
    });
  }

  const entryPresentDairy = dairyAvaiable[token];
  return res.status(202).json({
    msg: "Success: Token matched, car can be retrieved",
    token: token,
    entryPresentDairy: entryPresentDairy,
  });
});

// Bind to localhost explicitly
app.listen(PORT, "localhost", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
