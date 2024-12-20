const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse cookies
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000", // Frontend URL
    credentials: true, // Allow cookies and credentials
  })
);

// API Routes
app.use("/api/auth", authRoutes);

// Base route for health check
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API is running!" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.send("Hellow wer")
})