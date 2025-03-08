import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { requestForToken, onMessageListener } from "./firebase";
import axios from "axios";
import './App.css';
import Landing from './components/Landing/Landing';
import RootLayout from './RootLayout';
import Faculty from './components/Landing/Faculty';
import SignIn from './components/Landing/SignIn';
import RoutingError from './components/RoutingError';
import Faq from './components/Faq/Faq';
import StudentHome from './components/StudComp/StudentHome';
import FacultyHome from './components/FacComp/FacultyHome';
import Attendance from './components/StudComp/Attendance';
import StudentProfile from './components/StudComp/StudentProfile';
import FacultyList from './components/StudComp/FacultyList';
import StudentNotification from './components/StudComp/StudentNotification';
import FacultyNotification from './components/FacComp/FacultyNotification';
import FacultyProfile from './components/FacComp/FacultyProfile'; // Import FacultyProfile

const App = () => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    userType: null,
    username: null,
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout setAuthState={setAuthState} />,
      errorElement: <RoutingError />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: 'landing',
          element: <Landing />,
        },
        {
          path: 'faculty',
          element: <Faculty />,
        },
        {
          path: 'signin',
          element: <SignIn />,
        },
        {
          path: 'Faqs',
          element: <Faq />,
        },
        {
          path: 'StudComp/StudentHome',
          element: <StudentHome />,
        },
        {
          path: 'FacComp/FacultyHome',
          element: <FacultyHome />,
        },
        {
          path: 'StudComp/Attendance',
          element: <Attendance />,
        },
        {
          path: 'StudComp/StudentProfile',
          element: <StudentProfile />,
        },
        {
          path: 'StudComp/FacultyList',
          element: <FacultyList />,
        },
        {
          path: 'StudComp/StudentNotification',
          element: <StudentNotification username="Student-username" />,
        },
        {
          path: 'FacComp/FacultyNotification',
          element: <FacultyNotification username="Faculty-username" />,
        },
        {
          path: 'FacComp/FacultyProfile', // Add route for FacultyProfile
          element: <FacultyProfile />,
        },
        {
          path: '/#:section',
          element: <Landing />,
        }
      ],
    },
  ]);

  useEffect(() => {
    requestForToken().then((token) => {
      if (token) {
        console.log("FCM Token:", token);
      }
    });

    onMessageListener()
      .then((payload) => {
        setNotification(payload.notification);
      })
      .catch((err) => console.log("Failed: ", err));
  }, []);

  const sendNotification = async () => {
    const token = await requestForToken();
    axios.post("http://localhost:5000/send-notification", {
      title: "New Message",
      body: "This is a real-time message",
      token,
    });
  };

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;