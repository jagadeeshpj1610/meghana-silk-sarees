import userModel from "../models/userModel.js";

const login = async (req, res) => {
  const { email, password } = req.body;

}

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

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

export {
  login,
  signup
}
