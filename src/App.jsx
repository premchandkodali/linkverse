// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import RootLayout from './RootLayout';
import Faculty from './components/Faculty/Faculty';
import SignIn from './components/Header/Signin'; // Import SignIn component
import RoutingError from './components/RoutingError';
import Faq from  './components/Faq/Faq'; // Import Faq component 

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    errorElement: <RoutingError />,
    children: [
      {
        path: '/landing',
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
        path: 'Faqs', // Add route for SignIn component
        element: <Faq />,
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