// import React, { useRef } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import WeddingVenuesCity from "./WeddingVenuesCity";

// // Images
// import Agra from "../../assets/agra.webp";
// import Patna from "../../assets/patna.webp";
// import Mumbai from "../../assets/mumbai.webp";
// import Lucknow from "../../assets/lucknow.webp";
// import Delhi from "../../assets/delhi-ncr.webp";
// import Bangalore from "../../assets/bangalore.webp";
// import Ahmedabad from "../../assets/ahmedabad.webp";
// import Gurgaon from "../../assets/gurgaon.webp";
// import Chennai from "../../assets/chennai.webp";
// import Kolkata from "../../assets/kolkata.webp";
// import Indore from "../../assets/indore.webp";
// import Hyderabad from "../../assets/hyderabad.webp";
// import VenueImg from "../../assets/1.avif";
// import Noida from "../../assets/Images/Noida.jpg";
// import GreaterNoida from "../../assets/Images/GreaterNoida.jpg"

// export default function WeddingVenues() {
//   const scrollRef = useRef();

//   const cities = [
//     { name: "Agra", venues: "126 venues", images: Agra },
//     { name: "GreaterNoida", venues: "256 venues", images: GreaterNoida },
//     { name: "Noida", venues: "126 venues", images: Noida },
//     { name: "Patna", venues: "122 venues", images: Patna },
//     { name: "Mumbai", venues: "920 venues", images: Mumbai },
//     { name: "Lucknow", venues: "484 venues", images: Lucknow },
//     { name: "Delhi", venues: "13 venues", images: Delhi },
//     { name: "Bangalore", venues: "751 venues", images: Bangalore },
//     { name: "Ahmedabad", venues: "484 venues", images: Ahmedabad },
//     { name: "Gurgaon", venues: "484 venues", images: Gurgaon },
//     { name: "Chennai", venues: "338 venues", images: Chennai },
//     { name: "Kolkata", venues: "272 venues", images: Kolkata },
//     { name: "Indore", venues: "272 venues", images: Indore },
//     { name: "Hyderabad", venues: "444 venues", images: Hyderabad },
//   ];

//   const scroll = (direction) => {
//     const container = scrollRef.current;
//     if (container) {
//       const card = container.querySelector(".city-card");
//       const cardWidth = card ? card.offsetWidth : 250;
//       const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;

//       container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative ">
//       {/* Section Title */}
//       <h1 className="text-black text-2xl font-bold mb-4 text-left">Venues by Region</h1>

//       {/* Left Scroll Button */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-2 top-1/10 -translate-y-1/2 z-10  text-black rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100"
//       >
//         <FiChevronLeft size={20} />
//       </button>

//       {/* Right Scroll Button */}
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-2 top-1/10 -translate-y-1/2 z-10  text-black rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100"
//       >
//         <FiChevronRight size={20} />
//       </button>

//       {/* Scrollable Cities Container */}
// <div
//   ref={scrollRef}
//   className="flex gap-2 overflow-x-auto scrollbar-hide snap-x px-4"
// >
//   {cities.map((city, index) => (
//     <div
//       key={index}
//       className="city-card flex-shrink-0 text-center w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/6 snap-start m-1"
//     >
//       <Link to={`/venues/${city.name.toLowerCase()}`} state={{ city }}>
//         <img
//           src={city.images}
//           alt={city.name}
//           className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full mx-auto object-cover hover:scale-110 transition-transform duration-200"
//         />
//       </Link>
//       <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-2 text-black truncate max-w-full">
//         {city.name}
//       </h2>
//       <p className="text-xs sm:text-sm md:text-base font-medium text-black truncate max-w-full">
//         {city.venues}
//       </p>
//     </div>
//   ))}
// </div>


//       {/* Highlight Section */}
//       <>
//         <div className="flex flex-col lg:flex-row items-center gap-4 px-4 py-6">
//           {/* Text Section */}
//           <div className="w-full lg:w-1/2 p-4 bg-white text-black shadow-xl rounded-xl">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
//               Find your wedding venue
//             </h2>
//             <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
//               Search through a vast selection of venues to find the place that perfectly matches your wedding vision.
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="w-full lg:w-1/2 p- flex justify-center">
//             <img
//               src={VenueImg}
//               alt="Venue"
//               className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-2xl"
//             />
//           </div>
//         </div>
//       </>


//       {/* City Venues Section */}
//       <div className="mt-12">
//         <WeddingVenuesCity />
//       </div>
//     </div>
//   );
// }

import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import WeddingVenuesCity from "./WeddingVenuesCity";

// Images
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
import GreaterNoida from "../../assets/Images/GreaterNoida.jpg";

export default function WeddingVenues() {
  const scrollRef = useRef();

  const cities = [
    { name: "Agra", venues: "126 venues", images: Agra },
    { name: "GreaterNoida", venues: "256 venues", images: GreaterNoida },
    { name: "Noida", venues: "126 venues", images: Noida },
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
    <div className="relative px-4 md:px-8 lg:px-12 py-6">
      {/* Section Title */}
      <h1 className="text-black text-2xl sm:text-3xl font-bold mb-6 text-left">
        Venues by Region
      </h1>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-[100px] z-10 bg-white text-black rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-[100px] z-10 bg-white text-black rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Scrollable Cities */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide snap-x px-4"
      >
        {cities.map((city, index) => (
          <div
            key={index}
            className="city-card flex-shrink-0 text-center w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/6 snap-start m-1"
          >
            <Link to={`/venues/${city.name.toLowerCase()}`} state={{ city }}>
              <img
                src={city.images}
                alt={city.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full mx-auto object-cover hover:scale-110 transition-transform duration-200"
              />
            </Link>
            <h2 className="text-sm sm:text-bold md:text-lg font-semibold mt-2 text-black truncate max-w-full">
              {city.name}
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-medium text-black truncate max-w-full">
              {city.venues}
            </p>
          </div>
        ))}
      </div>

      {/* Highlight Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 mt-10">
        {/* Text Block */}
        <div className="w-full lg:w-1/2 p-1 bg-white text-black shadow-xl rounded-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold ">
            Find your wedding venue
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Search through a vast selection of venues to find the place that perfectly matches your wedding vision.
          </p>
        </div>

        {/* Image Block */}
        <div className="w-full lg:w-1/2 p-1">
          <img
            src={VenueImg}
            alt="Venue"
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* City Venues Section */}
      <div className="mt-12">
        <WeddingVenuesCity />
      </div>
    </div>
  );
}

