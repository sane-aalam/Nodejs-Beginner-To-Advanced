// one file to second file
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

import { add, subtract } from "./math.js";

add(3, 4);
subtract(4, 5);

// export deault method
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    res
      .status(200)
      .json({ message: "User login successfully!", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
// import router from "./file.js"
