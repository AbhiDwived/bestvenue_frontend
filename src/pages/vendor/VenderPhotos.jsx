import React from "react";
import { Link } from "react-router-dom";
import VenderHeader from "../vendor/VenderHeader";
import VenderPhotoUploader from "../vendor/venderPhotoUploader"

import besthomeimage from "../../assets/Images/besthomeimage.jpg" 
const VenderPhotos = () => {
  return (
    <>
    <VenderHeader/>
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white bg-gradient-to-r from-[#C6E7FF] to-[#eceeefe8]">
      {/* Image + Title */}
      <div className="w-full md:w-1/3 rounded-lg overflow-hidden border shadow">
  {/* Image + Overlay Text */}
  <div className="relative">
    <img
      src={besthomeimage}
      alt="Business Banner"
      className="w-full h-85 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h3 className="text-white text-center text-lg font-bold px-2">
        DIAMOND DEEP <br /> BANQUET HALL
      </h3>
    </div>
  </div>

  {/* Button below with border */}
  <div className="bg-white text-center border-t">
    <Link
      to="/storefront"
      className="block py-3 text-sm text-gray-700 font-medium hover:text-red-600 transition"
    >
      View storefront
    </Link>
  </div>
</div>

      {/* Edit Info Box */}
      <div className="max-w-2xl mx-auto mt-10 p-4">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Photo gallery <span className="text-gray-500">(3)</span>
      </h2>

      {/* Info Box */}
      <div className="bg-gray-100 border border-gray-200 rounded-md p-4 flex items-center gap-4 mb-6">
        <div className="text-4xl">📷</div>
        <div className="text-sm text-gray-700">
          <p>
            Add at least <span className="font-semibold">8 photos</span> highlighting your products or
            services to give couples a clear picture of your work.
          </p>
          <p className="font-semibold mt-1">
            Storefronts with more photos typically receive more leads.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-orange-50 border border-orange-200 rounded-md p-4 flex justify-between items-center">
        <span className="text-orange-600 font-semibold">
          GET MORE COUPLES TO SEE YOUR PHOTOS
        </span>
        <Link
          to="/premium"
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-md transition"
        >
          Go Premium
        </Link>
      </div>
    </div>
    </div>
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-[#C6E7FF] to-[#eceeefe8]">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4 space-y-4 border-b  bg-gray-50 bg-gradient-to-r from-[#C6E7FF] to-[#eceeefe8]">
        <nav className="mt-4 space-y-3 font-medium text-[13px] text-gray-700">
          <Link to="/business-details" className="flex items-center space-x-2 hover:text-red-600">
            <span>📄</span>
            <span>Business details</span>
          </Link>
          <Link to="/location-map" className="flex items-center space-x-2 hover:text-red-600">
            <span>🗺️</span>
            <span>Location and map</span>
          </Link>
          <Link to="/faq" className="flex items-center space-x-2 hover:text-red-600">
            <span>💬</span>
            <span>FAQ</span>
          </Link>
          <Link to="/promotions" className="flex items-center space-x-2 hover:text-red-600">
            <span>🎯</span>
            <span>Promotions</span>
          </Link>
          <Link to="/photos" className="flex items-center space-x-2 hover:text-red-600">
            <span>📷</span>
            <span>Photos</span>
          </Link>
          <Link to="/videos" className="flex items-center space-x-2 hover:text-red-600">
            <span>▶️</span>
            <span>Videos</span>
          </Link>
          <Link to="/real-weddings" className="flex items-center space-x-2 hover:text-red-600">
            <span>💍</span>
            <span>Real Weddings</span>
          </Link>
          <Link to="/menus" className="flex items-center space-x-2 hover:text-red-600">
            <span>🍴</span>
            <span className="font-semibold">Menus</span>
          </Link>
          <Link to="/availability" className="flex items-center space-x-2 hover:text-red-600">
            <span>📅</span>
            <span>Availability</span>
          </Link>
          <Link to="/events" className="flex items-center space-x-2 hover:text-red-600">
            <span>🗓️</span>
            <span>Events</span>
          </Link>
          <Link to="/vendors" className="flex items-center space-x-2 hover:text-red-600">
            <span>🧑‍🤝‍🧑</span>
            <span>Preferred vendors</span>
          </Link>
          <Link to="/team" className="flex items-center space-x-2 hover:text-red-600">
            <span>👥</span>
            <span>Meet the team</span>
          </Link>
          <Link to="/social" className="flex items-center space-x-2 hover:text-red-600">
            <span>🔗</span>
            <span>Social networks</span>
          </Link>
          <Link to="/weddingwire-button" className="flex items-center space-x-2 hover:text-red-600">
            <span>🖱️</span>
            <span>WeddingWire button</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6 text-[13px]">
      <VenderPhotoUploader/>
              </div>
    </div>
      
    </>
  );
};

export default VenderPhotos;
