import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.json({ message: "You are not authorised" });
    }
    next();
  } catch (err) {
    console.log(err);
    res.json({ message: "You are not authorised" });
  }
}

export {
  authMiddleware
}
