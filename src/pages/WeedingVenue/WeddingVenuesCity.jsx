import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaArrowRight } from "react-icons/fa";
import VenueNoida1 from '../../assets/VenueNoida1.jpg';
import VenueNoida2 from '../../assets/VenueNoida2.jpg';
import VenueNoida3 from '../../assets/VenueNoida3.webp';
import VenueNoida4 from '../../assets/VenueNoida4.webp';
import { useNavigate } from 'react-router-dom';

export default function WeddingVenuesCity() {
    const scrollRef = useRef();
    const navigate = useNavigate();
    const BlueDimond = () => {
        navigate('/BlueDimondVenue')
    }
    const venues = [
        {
            images: VenueNoida1,
            name: "Blue Dimond",
            rating: 5.0,
            reviews: 7,
            location: "Greater Noida",
            price: "From ₹1,000",
            capacity: "100 to 3000 Guests",
            promotion: "1 promotion - 5% Discount",
            route: "/blue-dimond-venue",
            
        },
        {
            images: VenueNoida2,
            name: "Hotel Prince Inn By",
            rating: 2.0,
            reviews: 7,
            location: "Greater Noida",
            price: "From ₹1,200",
            capacity: "100 to 3000 Guests",
            promotion: "1 promotion - 5% Discount",
            route: "/Hotel-Prince-Inn-By",
        },
        {
            images: VenueNoida3,
            name: "Hotel Prience Stay",
            rating: 4.0,
            reviews: 7,
            location: "Greater Noida",
            price: "From ₹1,500",
            capacity: "100 to 3000 Guests",
            promotion: "1 promotion - 5% Discount",
            route: "/Hotel-Prience-Stay",
        },
        {
            images: VenueNoida4,
            name: "Hotel Culture By Dsy",
            rating: 3.0,
            reviews: 7,
            location: "Greater Noida",
            price: "From ₹1,900",
            capacity: "100 to 3000 Guests",
            promotion: "1 promotion - 5% Discount",
            route: "/Hotel-Culture-By-Dsy",
        },

    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 200; // Adjust as needed
            scrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
        }
    };
    


    return (
        <div>
            <div className=" p-2 relative">
                <h1 className="text-black text-2xl font-bold mb-4 text-left">Venues In Noida</h1>

                <button
                    onClick={() => scroll("left")}
                    className="absolute  text-black left-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg w-10 h-10 sm:w-9 sm:h-9 md:w-8 md:h-8 lg:w-7 lg:h-7"
                >
                    <FiChevronLeft size={24} />
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="absolute  text-black right-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg w-10 h-10 sm:w-9 sm:h-9 md:w-8 md:h-8 lg:w-7 lg:h-7"
                >
                    <FiChevronRight size={24} />
                </button>

                <div
                    ref={scrollRef}
                    className=" flex gap-3 overflow-x-auto scrollbar-hide snap-x px-4 sm:px-5 md:px-5"
                >
                    {venues.map((city, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(city.route)}
                            className="city-card flex-shrink-0 gap-3 w-1/2 sm:w-1/2 sm:m-1 md:m-1 md:w-1/5  lg:w-1/3 xl:w-1/3 snap-start m-1.5 text-left rounded-lg shadow-md shadow-black"
                        >
                            <div>
                                <div className="w-full h-40 sm:h-48 md:h-56 lg:h-50">
                                    <img
                                        src={city.images}
                                        alt={city.name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="p-2">
                                    <h2 className="text-lg font-semibold mt-2 text-black">{city.name}</h2>
                                    <div className="flex justify-between text-sm mt-1">
                                        <p className="font-light text-black">{city.rating} ⭐⭐⭐⭐⭐</p>
                                        <p className="font-light text-black">{city.location}</p>
                                    </div>
                                    <div className="flex justify-between text-sm mt-1">
                                        <p className="font-light text-black">{city.price}</p>
                                        <p className="font-light text-black">{city.capacity}</p>
                                    </div>
                                    <div className="text-sm font-medium text-red-500 mt-1">
                                        {city.promotion}
                                    </div>
                                    <div className="text-sm font-light text-black mt-1">
                                        {city.reviews} reviews
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-black flex items-center justify-center p-4 w-full">
                <Link to={`/venues`} className="text-black font-semibold text-sm sm:text-base md:text-lg lg:text-xl flex items-center gap-2 px-4 py-2 border border-black rounded-lg hover:bg-green-700 hover:text-white transition">
                    Discover 444 venues in Noida
                    <FaArrowRight />
                </Link>
            </div>

        </div>
    );
}