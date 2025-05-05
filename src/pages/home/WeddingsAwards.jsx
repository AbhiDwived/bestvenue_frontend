import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import weddingAward from "../../assets/Images/weddingaward.jpeg";
import awards from "../../assets/Images/awards.jpeg";

const WeddingsAwards = () => {
    return (
        
        <div className="">
  <div className="flex items-center justify-between p-4 border border-gray-800">
    {/* Left section: Image and text */}
    <div className="flex items-center gap-3">
      <img className="rounded-full border-2 border-red-500 w-16 h-16" src={awards} alt="wedding awards" />
      <div className="flex flex-col justify-center ml-4 ">
        <h1 className="mb-1 text-lg font-semibold ">WeddingsAwards</h1>
        <p className="mb-0 text-sm text-gray-700 ">Explore winning in Your Areas</p>
      </div>
    </div>

    {/* Right section: Button */}
    <button className="flex items-center gap-1 border border-red-800 text-red-500 px-3 py-1 rounded hover:bg-red-100">
      Meet The Winners <FaArrowRight />
    </button>
  </div>
</div>

    )
}

export default WeddingsAwards