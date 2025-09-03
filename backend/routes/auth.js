import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const newUser = new User({ name, email, password, role });
    await newUser.save();

    res.json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
   

    const user = await User.findOne({ email });
    

    if (!user) return res.status(400).json({ error: "User not found" });
    if (user.password !== password) return res.status(400).json({ error: "Invalid credentials" });

    let path = "/";
    if (user.role === "admin") path = "/admin_dashboard";
    else if (user.role === "faculty") path = "/faculty_dashboard";
    else if (user.role === "student") path = "/student_dashboard";

    res.json({ role: user.role, path });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
