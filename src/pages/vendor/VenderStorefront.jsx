import React from "react";
import { Link } from "react-router-dom";
import VenderHeader from "../vendor/VenderHeader"
import VenderBusinessInfo from "../vendor/VenderBusinessInfo";
import besthomeimage from "../../assets/Images/besthomeimage.jpg" 
const VenderStorefront = () => {
  return (
    <>
    <VenderHeader/>
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white bg-gradient-to-r from-[#C6E7FF] to-[#eceeefe8]">
      {/* Image + Title */}
      <div className="w-full md:w-1/3 relative rounded-lg overflow-hidden shadow-lg ">
        <img
          src ={besthomeimage}   // Ensure this is in /public or use import
          alt="Business Banner"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-2">
          <h3 className="text-xl font-bold leading-tight">
            DIAMOND DEEP <br /> BANQUET HALL
          </h3>
        </div>
        <Link
          to="/storefront"
          className="block text-center bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          View storefront
        </Link>
      </div>

      {/* Edit Info Box */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-2">Edit your business information</h2>
        <div className="bg-gray-100 p-4 rounded-lg flex items-start gap-4 shadow-sm">
          <div className="text-2xl">📝</div>
          <div>
            <p className="font-semibold">
              Edit your business information and admin access details.
            </p>
            <p className="text-gray-600 text-sm">
              Content will be reviewed and updated as needed to meet our content requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
    <VenderBusinessInfo/>
    </>
  );
};

export default VenderStorefront;
