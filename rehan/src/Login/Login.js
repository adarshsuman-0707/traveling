import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiConnector } from "../services/apiConnector"; // Import your API connector
import { endpoint } from "../services/apis"; // Import the endpoint for login
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for button
  const [error, setError] = useState(null); // State to hold error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the request starts
    setError(null); // Reset error before making the request
    
        try {
          // Make the POST request to login
          const response = await apiConnector("POST", endpoint.LOGIN, { email, password });
          console.log(response, "loginPageResponse");
    
          // Check if the response contains success and data
          if (response &&  response.success) {
            // If login is successful, store the token in localStorage
            alert("Login successful");
            localStorage.setItem("userLoggedIn",true)
            navigate("/"); // Redirect to home or protected route
          } else {
            // Handle failure if the response data is not successful
            setError(response.message || "Login failed. Please try again.");
          }
        } catch (error) {
          // Handle any unexpected errors
          console.error("Error during login:", error);
          setError("An error occurred. Please try again.");
        } finally {
          setLoading(false); // Reset loading state after request is complete
        }
    
    
  };

  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {/* Display error message if there's an error */}
        {error && <div className="error-message">{error}</div>}

        <button type="submit" id="button1" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
