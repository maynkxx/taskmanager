// backend/controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (userid) => {
  return jwt.sign({ id: userid }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @Desc    Register a new user
// @Route   POST /api/auth/register
// @Access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password, profileImageUrl, adminInviteToken } = req.body;
    // check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    let role = "member";
    if (adminInviteToken && adminInviteToken === process.env.ADMIN_INVITE_TOKEN) {
      role = "admin";
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profileImageUrl,
      role,
    });
    // return user data with JWT
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
        role: user.role,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @Desc    Login user
// @Route   POST /api/auth/login
// @Access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // return user data with JWT
    
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profileImageUrl: user.profileImageUrl,
            role: user.role,
            token: generateToken(user._id),
        });
        
    // Implementation will go here
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @Desc    Get user profile
// @Route   GET /api/auth/profile
// @Access  Private (Requires JWT)
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
  // Implementation will go here
};

// @Desc    Update user profile
// @Route   PUT /api/auth/profile
// @Access  Private (Requires JWT)
const updateUserProfile = async (req, res) => {
    try{
        const user = await User.findById(req.user.id);
        if(!user) {
            return res.status(404).json({ message: "User not found" });
    }
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
    
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }
        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            profileImageUrl: updatedUser.profileImageUrl,
            role: updatedUser.role,
            token: generateToken(updatedUser._id),
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}
    


module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };