const express = require('express');
const fileUpload=require('express-fileupload')
const { signup, login,B2Bsignup } = require('../controllers/authController');
const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.use(fileUpload({ useTempFiles: true }));

// B2B signup route
router.post('/B2Bsignup', B2Bsignup);
router.post('/login', login);

module.exports = router;
