const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const uploadFileToCloudinary =require('../utils/cloudinary.js')
// Generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Signup logic
exports.signup = async (req, res) => {
  const { username, email, password, phone, city } = req.body;
    console.log(req.body,"Signup data from backend ");
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    user = await User.create({ username, email, password, phone, city });

    // Generate token and send as a cookie
    const token = generateToken(user._id);
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({
      success:true,
      message: 'Signup successful',
      user: { username, email, phone, city },
      
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error ,success:false});
  }
};

// Login logic
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body,"login data from backend ");

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate token and send as a cookie
    const token = generateToken(user._id);
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({
      message: 'Login successful',
      user: {
        username: user.username,
        email: user.email,
        phone: user.phone,
        city: user.city,
      },
      
      success:true
    });
  } catch (error) {
    res.status(500).json({ success:false,message: 'Server error', error });
  }
};


exports.B2Bsignup = async (req, res) => {
  try {
    const { username, email, phone, companyName, address, password } = req.body;

    // Check if required fields are present
    if (!username || !email || !phone || !companyName || !address || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if files are attached in the request
    if (!req.files || !req.files.aadhaar || !req.files.pan || !req.files.gumastha) {
      return res.status(400).json({ message: 'All required documents must be uploaded' });
    }

    // Upload files to Cloudinary
    const aadhaarUrl = await uploadFileToCloudinary(req.files.aadhaar);
    const panUrl = await uploadFileToCloudinary(req.files.pan);
    const gumasthaUrl = await uploadFileToCloudinary(req.files.gumastha);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      phone,
      companyName,
      address,
      aadhaarUrl,
      panUrl,
      gumasthaUrl,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during B2B signup:', error);
    res.status(500).json({ message: 'Signup failed. Please try again.' });
  }
};