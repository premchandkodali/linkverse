import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import "./Header.css";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
      <div className="ms-3">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="d-flex align-items-center">
        <ul className="nav me-3">
          <li className="nav-item">
            <strong>
              <Link to="Landing" className="nav-link text-white">
                Home
              </Link>
            </strong>
          </li>
          <li className="nav-item">
            <strong>
              <Link to="/Faculty" className="nav-link text-white">
                Faculty
              </Link>
            </strong>
          </li>
          <li className="nav-item">
            <strong>
              <Link to="/Achievements" className="nav-link text-white">
                Achievements
              </Link>
            </strong>
          </li>
          <li className="nav-item">
            <strong>
              <Link to="/Faqs" className="nav-link text-white">
                FAQ's
              </Link>
            </strong>
          </li>
        </ul>
        <button type="button" className="btn btn-outline-primary">Profile</button>
      </nav>
    </header>
  );
};

export default Header;
