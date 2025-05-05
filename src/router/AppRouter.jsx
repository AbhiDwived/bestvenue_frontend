import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import VendorLayout from '../layouts/VendorLayout'; // Vendor layout
import Home from '../pages/home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/home/Search';
import Realwedding from '../pages/home/Realwedding';
import WeddingsAwards from '../pages/home/WeddingsAwards';


import WeddingVenues from '../pages/WeedingVenue/WeddingVenues';
import WeddingVenuesCity from '../pages/WeedingVenue/WeddingVenuesCity';
import BlueDimondVenue from '../pages/WeedingVenue/IneerPages/BlueDimondVenue';
import HotelPrinceInn from '../pages/WeedingVenue/IneerPages/HotelPrinceInn';
import HotelPrienceStay from '../pages/WeedingVenue/IneerPages/HotelPrienceStay';
import HotelCultureByDsy from '../pages/WeedingVenue/IneerPages/HotelCultureByDsy';


import VendorLogin from "../pages/vendor/VenderLogin";
import VendorRegister from "../pages/vendor/VenderRegister";

import VenderDashboard from "../pages/vendor/VenderDashboard";
import VenderAnalyticsChart from '../pages/vendor/VenderAnalyticsChart';
import VenderMessages from "../pages/vendor/VenderMessages";
import VenderCompletionCard from "../pages/vendor/VenderCompletionCard";
import VenderStorefront from "../pages/vendor/VenderStorefront"
import VenderBusinessInfo from '../pages/vendor/VenderBusinessInfo';

const AppRouter = () => {
  return (
    <Router>
      <Routes>

        {/* Main site routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="real_Wedding" element={<Realwedding />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="search" element={<Search />} />
          
         {/* home */}
         <Route path='realwedding' element={<Realwedding />} />
          <Route path='weddingcard' element={<weddingCard />} />
          <Route path='weddingsawards' element={<WeddingsAwards />} />

          <Route path="Wedding_Venues" element={<WeddingVenues />} />
          <Route path="Wedding_Venues_city" element={<WeddingVenuesCity />} />
          <Route path="blue-dimond-venue" element={<BlueDimondVenue />} />
          <Route path="Hotel-Prince-Inn-By" element={<HotelPrinceInn />} />
          <Route path="Hotel-Prience-Stay" element={<HotelPrienceStay />} />
          <Route path="Hotel-Culture-By-Dsy" element={<HotelCultureByDsy />} />




          {/* Add more routes here as needed */}

        </Route>

        {/* Vendor Auth (NO MainLayout) */}
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/vendor-register" element={<VendorRegister />} />

        {/* Vendor Pages with VendorLayout */}
        <Route path="/vendor" element={<VendorLayout />}>
          <Route path="dashboard" element={<VenderDashboard />} />
          <Route path="analytics" element={<VenderAnalyticsChart />} />
          <Route path="messages" element={<VenderMessages />} />
          <Route path="completion-card" element={<VenderCompletionCard />} />
          <Route path="Storefront" element={<VenderStorefront />} />
          <Route path="BusinessInfo" element={<VenderBusinessInfo />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRouter;
