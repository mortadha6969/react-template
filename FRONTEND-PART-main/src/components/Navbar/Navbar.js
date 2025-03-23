import React from "react";
import "./Navbar.css";

const Navbar = () => {
  // Array of navigation items
  const navItems = ["Home", "Campaign", "Fundraiser", "Blog"];

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="nav-left">
          <Logo />
          <div className="nav-buttons-up">
            {navItems.map((item, index) => (
              <a className="Min-Menu-up" href={`/${item}`}>
                <button key={index} className="nav-button-up">
                  {item}
                </button>
              </a>
            ))}
          </div>
        </div>
        <div className="nav-right">
          <RegisterButton />
          <ProfileButton />
        </div>
      </div>
      <div className="nav-buttons-down">
        {navItems.map((item, index) => (
          <a className="Min-Menu-down" href={`/${item}`}>
            <button key={index} className="nav-button-item">
              {item}
            </button>
          </a>
        ))}
      </div>
    </nav>
  );
};

// Logo Component
const Logo = () => {
  return (
    <div className="logo">
      <a className="logo-button" href="/">
        <span className="logo-text">TrueFunding</span>
        <span className="logo-symbol">®</span>
      </a>
    </div>
  );
};

// Register Button Component
const RegisterButton = () => {
  return (
    <a className="button1"href="/Register">
      <button className="Register-button">
        <span className="Register-text">Register</span>
        <span className="Register-icon">→</span>
      </button>
    </a>
  );
};
// Profile Button Component
const ProfileButton = () => {
  return (
    <a className="button2" href="/ProfileAccountPage">
      <button className="Profile-button">
        <span className="Profile-icon">👤</span>
      </button>
    </a>
  );
};

export default Navbar;
