const { v2: cloudinary } = require('cloudinary');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Upload file to Cloudinary
 * @param {Object} file - The file object from req.files
 * @returns {Promise<string>} - The URL of the uploaded file
 */
const uploadFileToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: 'B2B/uploads',
    });
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('File upload failed. Please try again.');
  }
};

module.exports = uploadFileToCloudinary;
