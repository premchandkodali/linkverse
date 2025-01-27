import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';  // Correct import for Landingpage
import RootLayout from './RootLayout'; // Assuming you have a RootLayout component
import RoutingError from './components/RoutingError';
import Faculty from './components/Faculty/Faculty';
// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Root layout element
    children: [
      {
        path: '/Landing',  // Route to Landingpage component
        element: <Landing/>, // Landingpage component
      },
      // {
      //   path: '/Faculty',  // Route to Landingpage component
      //   element: <Faculty/>, // Landingpage component
      // },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
