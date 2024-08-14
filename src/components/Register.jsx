import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig.js";
// Pastikan path ini benar
import "../Register.css";

const Register = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Register user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth, // auth diimpor dari firebaseConfig.js
        email,
        password,
      );

      // Check if the registration was successful
      if (userCredential) {
        setError(""); // Clear error if registration is successful
        setIsAuthenticated(true); // Set authentication state
        navigate("/"); // Redirect to movies page after successful registration
      }
    } catch (error) {
      // Set error message if registration fails
      setError(
        "Error registering. Please check your information and try again.",
      );
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="register-form">
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
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
