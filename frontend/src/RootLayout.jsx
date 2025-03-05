import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Landing/Header'; // Import Header component
import StudentHeader from './components/StudComp/StudentHeader'; // Import StudentHeader component
import FacultyHeader from './components/FacComp/FacultyHeader'; // Import FacultyHeader component
import Footer from './components/Footer/Footer'; // Import Footer component
import './App.css'; // Import global styles

const RootLayout = () => {
  const location = useLocation();

  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    userType: null,
    username: null,
  });

  return (
    <div className="app-container-fluid">
      {authState.isAuthenticated ? (
        authState.userType === 'student' ? (
          <StudentHeader setAuthState={setAuthState} />
        ) : (
          <FacultyHeader setAuthState={setAuthState} />
        )
      ) : (
        <Header />
      )}
      <div className="content-wrapper">
        <Outlet context={{ setAuthState }} />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;