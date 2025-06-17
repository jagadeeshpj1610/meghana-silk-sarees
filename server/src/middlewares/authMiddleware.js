import jwt from "jsonwebtoken";
import { config } from "dotenv"
config()

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "You are not authorised" });
    }
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    res.user = { id: user.id, name: user.name, email: user.email };
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "You are not authorised" });
  }
}

export {
  authMiddleware
}
