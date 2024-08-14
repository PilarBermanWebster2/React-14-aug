import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig.js";
// Pastikan path ini benar
import "../Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in user with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth, // auth diimpor dari firebaseConfig.js
        email,
        password,
      );

      // Check if the login was successful
      if (userCredential) {
        setError(""); // Clear error if login is successful
        setIsAuthenticated(true); // Set authentication state
        navigate("/"); // Redirect to movies page after successful login
      }
    } catch (error) {
      // Set error message if login fails
      setError(
        "Error logging in. Please check your credentials and try again.",
      );
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
