// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./images/logo.jpg";

const Navbar = ({ user, onSignOut }) => {
  const [isClicked, setClicked] = useState(false);

  const handleDashboardClick = () => {
    setClicked(!isClicked);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left-section">
          <Link to="/" className="logo">
            <img src={Logo} alt="MediBuddy Logo" />
          </Link>
          <Link to="/" className="app-name">
            <span className="logo-medi" style={{ color: "#01A0F5" }}>
              Medi
            </span>
            <span className="logo-buddy" style={{ color: "#F05540" }}>
              Buddy
            </span>
          </Link>

          <Link to="/" className="home-link">
            Home
          </Link>
        </div>

        <div className="right-section">
          <ul className="nav-links">
            {user ? (
              <div className="user-links">
                <li>
                  <Link
                    to="/dashboard"
                    onClick={handleDashboardClick}
                    className="dashboard-link"
                  >
                    Dashboard
                  </Link>
                  {isClicked && (
                    <div className="options-box">
                      <p>Choose an option:</p>
                      <ul>
                        <li>
                          <Link
                            to="/medicine-reminder"
                            style={{ textDecoration: "none", color: "#656868" }}
                          >
                            Medicine Reminder App
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            style={{ textDecoration: "none", color: "#656868" }}
                          >
                            About the App
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/exercise"
                            style={{ textDecoration: "none", color: "#656868" }}
                          >
                            Your Daily Exercises
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <button onClick={onSignOut} className="button">
                    Sign Out
                  </button>
                </li>
              </div>
            ) : (
              <div className="auth-links">
                <li>
                  <Link
                    to="/signup"
                    style={{ color: "#656868", textDecoration: "none" }}
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    style={{ color: "#656868", textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
