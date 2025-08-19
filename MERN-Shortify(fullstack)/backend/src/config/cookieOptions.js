export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // only HTTPS in production
  sameSite: "lax", // 🔁 changed from "strict" to "lax" (more flexible, good for most use cases)
  maxAge: 7 * 24 * 60 * 60 * 1000, // ⏳ 7 days in milliseconds
};
