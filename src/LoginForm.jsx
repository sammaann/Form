import React from "react";
import "./LoginForm.css";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";

const LoginForm = () => {
  return (
    <div className="login-container"> 
      <div className="form-section">
        <h2>Log In</h2>
        <p>Welcome back! Please enter your details</p>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
          <div className="or-divider">Or Continue With</div>
          <div className="social-login">
            <button type="button" className="google-login">
              <FcGoogle className="text-2xl mr-2" />
              Google
            </button>
            <button type="button" className="facebook-login">
              <MdFacebook />
              Facebook
            </button>
          </div>
        </form>
        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
      <div className="image-section">
        <img
          src="https://img.freepik.com/free-photo/young-woman-exercising-with-her-headphones_23-2149127345.jpg"
          alt="Login"
        />
      </div>
    </div>
  );
};

export default LoginForm;
