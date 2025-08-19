import { asyncWrapper } from "../services/AsyncWrapper.js";
import { registerUser } from "../services/auth.service.js";
import { cookieOptions } from "../config/cookieOptions.js";

export const register_user = asyncWrapper(async (req, res) => {
  // you can used the services of regiser_user here which is also connect with DB
  // (which store the name,email,password) throw dao.short_url.js
  const { name, email, password } = req.body;
  const token = await registerUser(name, email, password);
  console.log("register controller,", token);
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({ massage: "login success", token });
});

export const login_user = asyncWrapper((req, res) => {
  res.send("user successfully login!");
});
