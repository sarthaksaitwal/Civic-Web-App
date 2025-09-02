import React from "react";
import "../styles/LoginPage.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Top Icon */}
        <div className="login-icon">
          <img
            src="https://img.icons8.com/ios-filled/50/4a90e2/city-buildings.png"
            alt="logo"
          />
        </div>

        {/* Title */}
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">
          Sign in to your civic management account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email/Username */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your email or username"
              required
            />
            <FaUser className="input-icon" />
          </div>

          {/* Password */}
          <div className="input-group">
            <input type="password" placeholder="Enter your password" required />
            <FaLock className="input-icon" />
          </div>

          {/* Remember + Forgot */}
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
