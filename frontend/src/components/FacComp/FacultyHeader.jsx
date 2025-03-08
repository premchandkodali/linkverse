import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FacultyHeader.css'; // Import a CSS file for header styles
import logo from '../../assets/logo.png'; // Adjust the path to your logo

const FacultyHeader = ({ setAuthState }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      console.log('Logging out...');
      setAuthState({ isAuthenticated: false, userType: null, username: null });
      navigate('/signin');
    }
  };

  return (
    <header className="faculty-header">
      <div className="faculty-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/FacComp/FacultyHome">Home</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/attendance">Attendance</Link></li>
          <li><Link to="/FacComp/FacultyProfile">Profile</Link></li> {/* Update the link */}
          <li><Link to="/FacComp/FacultyNotification"><i className="notification-icon"></i></Link></li>
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default FacultyHeader;