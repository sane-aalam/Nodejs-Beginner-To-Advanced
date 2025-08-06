// Expess.js(used mostly login/register application!)

const User = {
  username: String,
  password: String,
};

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.send("Login successful");
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});
