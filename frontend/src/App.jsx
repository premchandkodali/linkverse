import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import RootLayout from './RootLayout';
import Faculty from './components/Landing/Faculty'; // Corrected import path for Faculty component
import SignIn from './components/Landing/SignIn'; // Corrected import path for SignIn component
import RoutingError from './components/RoutingError';
import Faq from './components/Faq/Faq'; // Import Faq component 
import StudentHome from './components/StudComp/StudentHome';
import FacultyHome from './components/FacComp/FacultyHome'; // Corrected import path for FacultyHome component
import Attendance from './components/StudComp/Attendance'; // Import Attendance component
import StudentProfile from './components/StudComp/StudentProfile'; // Import StudentProfile component
import FacultyList from './components/StudComp/FacultyList'; // Import FacultyList component
import StudentNotification from './components/StudComp/StudentNotification'; // Import StudentNotification component

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    errorElement: <RoutingError />,
    children: [
      {
        index: true, // This sets Landing as the default route
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
        path: 'signin', // Add route for SignIn component
        element: <SignIn />,
      },
      {
        path: 'Faqs', // Add route for Faq component
        element: <Faq />,
      },
      {
        path: 'StudComp/StudentHome', // Add route for student dashboard
        element: <StudentHome />,
      },
      {
        path: 'FacComp/FacultyHome', // Add route for faculty dashboard
        element: <FacultyHome />,
      },
      {
        path: 'StudComp/Attendance', // Add route for attendance
        element: <Attendance />,
      },
      {
        path: 'StudComp/StudentProfile', // Add route for student profile
        element: <StudentProfile />,
      },
      {
        path: 'StudComp/FacultyList', // Add route for faculty list
        element: <FacultyList />,
      },
      {
        path: 'StudComp/StudentNotification', // Add route for student notifications
        element: <StudentNotification />,
      },
      // Add this catch-all route for hash navigation
      {
        path: '/#:section',
        element: <Landing />,
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;