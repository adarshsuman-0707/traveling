import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { endpoint } from "../services/apis";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    city: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  const { SIGN_UP } = endpoint;

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { city, username, email, password, phone } = formData;

    // Basic input validation
    if (!city || !username || !email || !password || !phone) {
      alert("Please fill in all fields");
      return;
    }

    try {
      console.log("Submitting form data:", formData);
      const response = await apiConnector("POST", SIGN_UP, {
        city,
        username,
        email,
        password,
        phone,
      });
console.log(response);
      if (response.success) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(`Signup failed: ${response.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit" id="button1">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
      <p>
        Sign up as a B2B <Link to="/B2BSignup">Signup</Link>
      </p>
    </div>
  );
};

export default Signup;
