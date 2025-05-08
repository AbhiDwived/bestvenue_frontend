import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import venue1 from "../../assets/Images/crouselimage.png";
import venue2 from "../../assets/Images/carouelimage2.png";
import venue3 from "../../assets/Images/carouselimage3.png";

const images = [venue1, venue2, venue3]; // Add more if needed

const Searchpage = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white overflow-hidden border-b border-gray-300">

      {/* Left Section */}
      <div className="p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Everything you need to plan your event
        </h2>
        <p className="text-gray-600 mb-6">
          Search over 77,000 local professionals with reviews, pricing, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Search vendor category or name"
           
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-all flex items-center justify-center">
            <FaSearch className="mr-2" />
            Find
          </button>

        </div>
      </div>

      {/* Right Section */}
      {/* <div className="h-full custom-clipped-image relative">
        <img
          src={images[currentImageIndex]}
          alt="venue"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute bottom-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
          Picfniti Studios
        </div>
      </div> */}
      <div className="relative  h-full overflow-hidden">
        <img
           src={images[currentImageIndex]}
          // alt={card.title}
          className="w-full h-full object-cover"
          style={{ height: "384px" }}
        />
        <div className="absolute inset-0 bg-white mains curved-mask pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Searchpage;
