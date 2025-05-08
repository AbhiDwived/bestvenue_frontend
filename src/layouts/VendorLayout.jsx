import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VenderHeader from '../pages/vendor/VenderHeader';
import VenderNavbar from '../pages/vendor/VenderNavbar';

const VendorLayout = () => {
  return (
    <>
      <Header />
      <VenderHeader />
      <VenderNavbar />
      <Outlet />
      <Footer />
    </>
    
  );
};

export default VendorLayout;
