import React, { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './RootLayout.css';

function RootLayout() {

  return (
    <div >
      <Header />
      <br /><br /><br />
      <div style={{minHeight:"60.9vh"}} > 
                <Outlet/>
            </div>
      <Footer />
    </div>
  );
}

export default RootLayout;