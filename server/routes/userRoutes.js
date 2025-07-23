import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();
//register

router.post("/register", async (req, res) => {
 
  let token;
  try {
     const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "user already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(201).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
});

//login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials!" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(201).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
});

//get users

router.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    if(!users){
      return res.status(404).json({msg: 'users not found!'})
    }
    res.status(201).json(users)
  } catch (error) {
    console.log(error)
  }
})

//get users

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if(!user){
      return res.status(404).json({msg: 'user not found!'})
    }
    res.status(201).json(user)
  } catch (error) {
    console.log(error)
  }
})
export default router;
