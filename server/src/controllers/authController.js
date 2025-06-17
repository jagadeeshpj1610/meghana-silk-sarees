import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password are required" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This email is not exist. Please signup" })
    }
    if (user.password !== password) {
      return res.status(400).json({ message: "Given password is incorrect" });
    }

    const token = jwt.sign({
      id: user.id,
      name: user.name,
      email: user.email
    }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    })

    // const cookie = req.cookies.token;
    // const user1 = jwt.verify(cookie, process.env.JWT_SECRET_KEY)
    // console.log(cookie)

    res.json(user);

  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal Server" });
  }

}

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "name, email and password is required" });
    }

    if (!name.match(/^[a-zA-Z]+$/)) {
      return res.status(400).json({ message: "name must be letters" })
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ message: "type correct email" })
    }
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/)) {
      return res.status(400).json({ message: "password must be above the length of 9, and have at least one character, number and special character" });
    }
    const newUser = await userModel.create({ email, password, name })
    res.json({ newUser, message: "new user created successfully" });
  } catch (err) {
    if (err.errorResponse.code === 11000) {
      return res.json({ message: "Another user is exist with this email" });
    }
    res.status(400).json({ message: "Internal server error" })
  }
}

const logout = (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).json({message: "Logout successfully"})
  } catch (error) {
    res.status(500).json({message: "Internal server error"})
  }
}

export {
  login,
  signup,
  logout,
}
