import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">Number Guessing</div>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
          <Link className="link" to="/game">
            Game
          </Link>
          <Link className="link" to="/instructions">
            Instructions
          </Link>
      </div>
    </div>
  );
}

export default Navbar
