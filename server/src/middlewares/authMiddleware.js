import jwt from "jsonwebtoken";
import { config } from "dotenv"
config()

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "You are not authenticated. Please Login" });
    }
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = { id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone };
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "You are not authenticated" });
  }
}

export {
  authMiddleware
}
