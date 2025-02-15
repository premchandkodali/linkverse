import  { useRef } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {

  const dropdownRef = useRef(null);

  const navigate = useNavigate();

    const handleNavigation = (id) => {
    navigate("/landing"); // Navigate to Landing first (if needed)
    
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adding delay to ensure DOM update
  }
  const handleFacultyNavigation = (id) => {
    navigate("/faculty"); // Navigate to Landing first (if needed)
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  return (
    <header className={`d-flex justify-content-between align-items-center p-3`}>
      <div className="ms-3">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="d-flex align-items-center">
        <ul className="nav me-3">
          <li className="nav-item">
            <strong>
              <Link to="/landing" className="nav-link">
                Home
              </Link>
            </strong>
          </li>
          <li className="nav-item">
          <button className="nav-link btn-link" onClick={() => handleFacultyNavigation("facultypage")}>
                Faculty
              </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn-link" onClick={() => handleNavigation("recruitment")}>
                Achievements
              </button>
          </li>
          <li className="nav-item">
            <strong>
              <Link to="/Faqs" className="nav-link">
                FAQs
              </Link>
            </strong>
          </li>
        </ul>
        <div className="profile-icon-container-fluid" ref={dropdownRef}>
          <button 
            className="profile-icon-btn"
            aria-label="Profile menu"
          >
            <svg 
              className="profile-icon" 
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
            </svg>
          </button>
          
          <div className="profile-dropdown">
            <button className="dropdown-item">
              <Link to="/profile" className="dropdown-link">
                Profile
              </Link>
            </button>
            <button className="dropdown-item">
              <Link to="/settings" className="dropdown-link">
                Settings
              </Link>
            </button>
            <button className="dropdown-item">
              <Link to="/signin" className="dropdown-link">
                Sign In
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;