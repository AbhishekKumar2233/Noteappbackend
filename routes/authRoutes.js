const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async(req,res)=>{
    try{
        const {username,email,password} = req.body;

        const existingUser =
            await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            });
        }

        const hashedPassword =
            await bcrypt.hash(password,10);

        const user = await User.create({
            username,
            email,
            password:hashedPassword
        });

        const token = jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m"
      }
    );
        res.status(201).json({
            message:"User Registered",
            token:token,
            user:{'userId':user._id,'emailId':user.email}
        });
    }catch(error){
        res.status(500).json(error);
    }

});

const jwt = require("jsonwebtoken");
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User Not Found"
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m"
      }
    );
    res.status(200).json({
      message: "Login Successful",
      user: {'userId':user._id,'emailId':user.email},
      token: token
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

module.exports = router;
