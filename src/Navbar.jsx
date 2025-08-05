import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-header">
        <h1>ADMIN TABLE</h1>
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Code</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
