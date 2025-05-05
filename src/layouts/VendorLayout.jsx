import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import VenderHeader from '../pages/vendor/VenderHeader';
import VenderNavbar from '../pages/vendor/VenderNavbar';

const VendorLayout = () => {
  return (
    <>
     {/* <Header /> */}
      <VenderHeader />
      <VenderNavbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default VendorLayout;
