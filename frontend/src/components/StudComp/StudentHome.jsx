import React from 'react';
import { useLocation } from 'react-router-dom';
import StudentHeader from './StudentHeader'; // Import StudentHeader component
import './StudentComponent.css'; // Import CSS for home content

const StudentHome = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <StudentHeader />
      <div className="home-content">
        <h1>Welcome, {username}!</h1>
      </div>
    </div>
  );
};

export default StudentHome;
