// import asyncHandler from 'express-async-handler';
// import User from '.../models/UserModel.js';
// import { generateToken }from '../config/generateToken.js'

// export const registerUser = asyncHandler( async(req,res) => {
//     const {name, email, password, pic} = req.body

//     if(!name || !email || !password){
//         res.status(400);
//         throw new Error('Please enter all the fields')
//     }
//     //to fins if userexist
//     const userExist  = await User.findOne({email})
//     if(userExist){
//         res.status(400);
//         throw new Error('User Already exist')
//     }
//     //to create a new user
//     const user = await User.create({
//         name,
//         email,
//         password,
//         pic,
//     })
//     if(user){
//         res.status(200).json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             pic: user.pic,
//             token: generateToken(user._id)
//         })
//     }else{
//         throw new Error("user not found")
//     }

// })
//  export const authUser = asyncHandler(async(req, res) =>{
//  const {email, password} = req.body
//  const user = await User.findOne({email})
//  if(user  && (await user.matchPassword(password))) {
//     res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         pic: user.pic,
//         token: generateToken(user._id),

//     })
//  }else{
//     res.status(401);
//     throw new Error("Invalid Email or Password")
//  }

//  })

import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//end point for registeration
export const RegisterUsers = async (req, res) => {
  const { username, email, password, pic } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword, pic });
    await user.save();
    res.status(201).json({ username, email, password, pic});
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//user login
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email});
    if (!user) {
      return res.status(400).json({ error: "Didnt find same crendentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "wrong password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, username: user.username });
  } catch (error) {
    console.error("Error login user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const userlogout = (req, res) => {
  res.clearCookie("token").status(200).json("Signout success!");
};


