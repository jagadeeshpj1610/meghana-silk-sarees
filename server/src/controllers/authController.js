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
      email: user.email,
      role: user.role,
      phone: user.phone,
    }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    })

    res.json(user);

  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal Server" });
  }

}

const signup = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "name, email, password and phone is required" });
    }

    if (!name.match(/^[a-zA-Z ]+$/)) {
      return res.status(400).json({ message: "name must be letters" })
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ message: "type valid email" })
    }
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/)) {
      return res.status(400).json({ message: "password must be above the length of 9, and have at least one character, number and special character" });
    }
    if (!phone.match(/^(?:\+91[-\s]?|0)?[6-9]\d{9}$/)) {
      return res.status(400).json({ message: "Phone number length must be 10" })
    }
    const newUser = await userModel.create({ email, password, name, phone })
    res.json({ newUser, message: "new user created successfully" });
  } catch (err) {
    if (err.errorResponse || err.errorResponse.code === 11000) {
      return res.status(400).json({ message: "Another user is exist with this email" });
    }
    console.log(err)
    res.status(400).json({ message: "Internal server error" })
  }
}

const logout = (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).json({ message: "Logout successfully" })
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
}

const isLoggedIn = async(req, res) => {
  try {
    // if(req.cookies.token){
    //   return res.json({isLoggedIn: true})
    // }
    const token = req.cookies.token;

    if (!token) {
      return res.json({ isLoggedIn: false, user: null });
    }
     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await userModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.json({ isLoggedIn: false, user: null });
    }

    res.json({ isLoggedIn: true, user, });

  } catch (error) {
    res.json({ isLoggedIn: false, user: null })
  }
}

const isAdmin = (req, res) => {
  try {
    if (req.user.role === "admin") {
      return res.json({ isAdmin: true });
    }
    res.json({ isAdmin: false })
  } catch (err) {
    console.log(err);
    res.status(400).json({ isAdmin: false, message: "Internal server error" });
  }
}

export {
  login,
  signup,
  logout,
  isLoggedIn,
  isAdmin,
}
