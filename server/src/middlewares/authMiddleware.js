import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(400).json({ message: "You are not authorised" });
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "You are not authorised" });
  }
}

export {
  authMiddleware
}
