const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  aadhaarUrl: {
    type: String,
    required: false,
  },
  panUrl: {
    type: String,
    required: false,
  },
  gumasthaUrl: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

// Pre-save middleware to hash the password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
