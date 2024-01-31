import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function Home() {
  return (
    <div className="main-wrapper">
      <h1 className="welcome-header row col-12 d-flex justify-content-center">Welcome to Banking Management System</h1>
      <div className="user-links--wrapper">
        <div className="user-links user-links-register row col-4 d-flex justify-content-center">
          <p className="user-link-message">
            Please use below link to Register if you are a new user to our
            banking
          </p>
          <Link className="user-link row col-3 d-flex justify-content-center" to="register">
            Register
          </Link>
        </div>

        <div className="user-links user-links-login row col-4 d-flex justify-content-center">
          <p className="user-link-message">
            If you are an existing user, please click below link to login
          </p>
          <Link className="user-link row col-3 d-flex justify-content-center" to="login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
