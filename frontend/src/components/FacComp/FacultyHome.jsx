import React from 'react';
import { useLocation } from 'react-router-dom';
import FacultyHeader from './FacultyHeader'; // Import FacultyHeader component

const FacultyHome = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <FacultyHeader />
      <div className="home-content">
        <h1>Welcome, {username}!</h1>
      </div>
    </div>
  );
};

export default FacultyHome;