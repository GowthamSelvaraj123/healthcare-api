const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};
const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    if (!name || !email || !password || !phone || !role) {
      return res.status(404).json({ success: false, message: "The fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ success: false, message: "The email already registered" });
    }
    const newUser = new User({ name, email, phone, password, role });
    newUser.save();
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: "Register Successfully",
      html: `<p>Thanks you for registering</p>`,
    });
    res.status(200).json({ success: true, message: "Register Successfully" });
  } catch (err) {
    res.status(200).json({ success: true, message: "Server Error", err });
  }
};
const loginController = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user)
    {
        return res.status(200).json({success:false, message:"User Not Found"})
    }
    const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
    {
        return res.status(200).json({success:false, message:"Passowrd Not Match"})
    }
    const token = generateToken(user);
    res.status(200).json({ success: true, message: "Login Successfully" });
  } catch (err) {
    res.status(200).json({ success: false, message: "Server Error", err });
  }
};
const forgotPasswordController = async (req, res) => {
  try {
    const {email} = req.body;
    const user = await User.find({email});
    if(!user)
    {
        return res.status(200).json({success:false, message:"user not found"})
    }
    const resetToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetPasswordToken = tokenHash;
    user.resetPasswordExpire = Date.now() +  15 * 60 * 1000;
    await user.save();
    const resetURL = `localhost:5000/api/auth/reset-password/${resetToken}`;
      await transporter.sendMail({
    from: process.env.SMTP_EMAIL,
      to: user.email,
      subject: 'Password Reset Request',
      html: `<p>You requested to reset your password.</p><p>Click <a href="${resetURL}">here</a> to reset it. This link expires in 15 minutes.</p>`
    });
    res.status(200).json({ success: true, message: "Forgot Password Successfully" });
  } catch (err) {
    res.status(200).json({ success: true, message: "Server Error", err });
  }
};
const resetPasswordController = async (req, res) => {
  try {
    const {token} = req.params;
    const {newPassword} = req.body;
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const user = await User.findOne({resetPasswordToken: tokenHash, resetPasswordExpire: { $gt: Date.now() },})
     if (!user)
      return res.status(400).json({ message: 'Invalid or expired token' });
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    res.status(200).json({ success: true, message: "Reset Password Successfully" });
  } catch (err) {
    res.status(200).json({ success: true, message: "Server Error", err });
  }
};
const logoutController = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Logout Successfully" });
  } catch (err) {
    res.status(200).json({ success: true, message: "Server Error", err });
  }
};

module.exports = {
  registerController,
  loginController,
  resetPasswordController,
  forgotPasswordController,
};
