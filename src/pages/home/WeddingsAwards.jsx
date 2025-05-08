import React from 'react';
import { FaArrowRight, FaStar } from "react-icons/fa";
import awards from "../../assets/Images/awards.jpeg";

const WeddingsAwards = () => {
  return (
    <div className="p-4 m-5 sm:p-6 border border-gray-300 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        
        {/* Left Section: Image + Text + Star */}
        <div className="flex items-center gap-3 w-full sm:w-auto text-center sm:text-left">
          <img
            className="rounded-full border-2 border-red-500 w-12 h-12 sm:w-16 sm:h-16"
            src={awards}
            alt="wedding awards"
          />
          <div className="flex flex-col">
            <div className="flex items-center justify-center sm:justify-start gap-1">
              <h1 className="text-base sm:text-lg font-semibold text-gray-800">
                WeddingsAwards
              </h1>
              {/* <FaStar className="text-yellow-500 text-sm mt-[1px]" /> */}
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              Explore winning in Your Areas
            </p>
          </div>
        </div>

        {/* Right Section: Button */}
        <div className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 border border-red-600 text-red-500 px-4 py-2 rounded-md hover:bg-red-100 transition-all text-sm sm:text-base">
            <span>Meet The Winners</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingsAwards;
