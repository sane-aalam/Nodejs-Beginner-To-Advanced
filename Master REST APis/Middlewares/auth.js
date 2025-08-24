import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: "Access denied, no token" });
  }
  try {
    const verifedAuthentication = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifedAuthentication;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
}

export default auth;
