import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StudentHeader.css'; // Import a CSS file for header styles
import logo from '../../assets/logo.png'; // Adjust the path to your logo

const StudentHeader = ({ setAuthState }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      setAuthState({ isAuthenticated: false, userType: null, username: null });
      navigate('/signin');
    }
  };

  return (
    <header className="student-header">
      <div className="student-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/StudComp/StudentHome">Home</Link></li>
          <li><Link to="/StudComp/FacultyList">Faculty</Link></li>
          <li><Link to="/StudComp/Attendance">Attendance</Link></li>
          <li><Link to="/StudComp/StudentProfile">Profile</Link></li>
          <li><Link to="/StudComp/StudentNotification"><i className="notification-icon"></i></Link></li>
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default StudentHeader;