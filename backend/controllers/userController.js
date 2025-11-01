import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register a new user
const signupUser = async (req, res) => {
  try {
    const { username, email, role, password } = req.body;
    console.log(req.body);
    //check existing user
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    if (!username || !email || !role || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    const newUser = await User.create({
      username,
      role,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        password: newUser.password,
      },
    });
  } catch (error) {
    console.error("Signup error details:", error);
    res.status(500).json({ error: error.message });
  }
};

//login user
const signinUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    //check user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    //check password
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    //generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { signupUser, signinUser };
