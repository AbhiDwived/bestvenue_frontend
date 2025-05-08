import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import WeddingVenuesCity from "./WeddingVenuesCity";

import Agra from "../../assets/agra.webp";
import Patna from "../../assets/patna.webp";
import Mumbai from "../../assets/mumbai.webp";
import Lucknow from "../../assets/lucknow.webp";
import Delhi from "../../assets/delhi-ncr.webp";
import Bangalore from "../../assets/bangalore.webp";
import Ahmedabad from "../../assets/ahmedabad.webp";
import Gurgaon from "../../assets/gurgaon.webp";
import Chennai from "../../assets/chennai.webp";
import Kolkata from "../../assets/kolkata.webp";
import Indore from "../../assets/indore.webp";
import Hyderabad from "../../assets/hyderabad.webp";
import VenueImg from "../../assets/1.avif";
import Noida from "../../assets/Images/Noida.jpg";

export default function WeddingVenues() {
  const scrollRef = useRef();

  const cities = [
    { name: "Agra", venues: "126 venues", images: Agra },
    {name: "Noida", venues: "126 venues", images: Noida},
    { name: "Patna", venues: "122 venues", images: Patna },
    { name: "Mumbai", venues: "920 venues", images: Mumbai },
    { name: "Lucknow", venues: "484 venues", images: Lucknow },
    { name: "Delhi", venues: "13 venues", images: Delhi },
    { name: "Bangalore", venues: "751 venues", images: Bangalore },
    { name: "Ahmedabad", venues: "484 venues", images: Ahmedabad },
    { name: "Gurgaon", venues: "484 venues", images: Gurgaon },
    { name: "Chennai", venues: "338 venues", images: Chennai },
    { name: "Kolkata", venues: "272 venues", images: Kolkata },
    { name: "Indore", venues: "272 venues", images: Indore },
    { name: "Hyderabad", venues: "444 venues", images: Hyderabad },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const card = container.querySelector(".city-card");
      const cardWidth = card ? card.offsetWidth : 250;
      const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <>
        <h1 className="text-black text-2xl font-bold mb-4 text-left">
          Venues by Region
        </h1>
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute  text-black left-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg w-10 h-10 sm:w-9 sm:h-9 md:w-8 md:h-8 lg:w-7 lg:h-7"
        >
          <FiChevronLeft size={24} />
        </button>
        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute  text-black right-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg  w-10 h-10 sm:w-9 sm:h-9 md:w-8 md:h-8 lg:w-7 lg:h-7"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-0 overflow-x-auto scrollbar-hide snap-x px-4 sm:px-5 md:px-5"
        >
          {cities.map((city, index) => (
            <div
              key={index}
              className="city-card flex-shrink-0 text-center w-1/4 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/6 snap-start m-1"
            >
              <Link to={`/venues/${city.name.toLowerCase()}`} state={{ city }}>
                <img
                  src={city.images}
                  alt={city.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full mx-auto object-cover hover:scale-110 transition-transform duration-200"
                />
              </Link>
              <h2 className="text-base sm:text-md md:text-xl font-bold mt-2 text-black ">
                {city.name}
              </h2>
              <p className="text-lg sm:text-sm md:text-base font-medium text-black">
                {city.venues}
              </p>
            </div>
          ))}
        </div>
      </>
      <div className="flex flex-col md:flex-row gap-2 p-4 h-auto bg-amber-100">
        {/* Text Section */}
        <div className="w-full mt-20 md:w-1/2 p-3 bg-white lg:h-50  lg:w-170 text-black shadow-md shadow-black rounded-xl sm:mx-2 md:mx-0">
          <h2 className="text-md sm:text-2xl md:text-3xl font-bold mb-2 lg:mt-10">
            Find your wedding venue
          </h2>
          <p className="text-sm sm:text-base md:text-md font-semibold">
            Search through a vast selection of venues to find the place that perfectly matches your wedding vision.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/1 flex justify-center items-center ">
          <img
            src={VenueImg}
            alt="Venue"
            className="w-full sm:w-full md:w-70 lg:w-full h-210 max-h-82 rounded-2xl object-cover"
          />
        </div>
      </div>
      {/* Additional Section */}
      <div className="mt-12">
        <WeddingVenuesCity />
      </div>

    </>
  
  );
}


