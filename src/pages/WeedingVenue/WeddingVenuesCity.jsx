import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

import VenueNoida1 from '../../assets/VenueNoida1.jpg';
import VenueNoida2 from '../../assets/VenueNoida2.jpg';
import VenueNoida3 from '../../assets/VenueNoida3.webp';
import VenueNoida4 from '../../assets/VenueNoida4.webp';

export default function WeddingVenuesCity() {
    const navigate = useNavigate();
    const location = useLocation();
    const scrollRef = useRef(null); // Reference for scrolling to top

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
        {
            images: VenueNoida1,
            name: "Royal Palace",
            rating: 4.5,
            reviews: 12,
            location: "Greater Noida",
            price: "From ₹1,800",
            capacity: "200 to 4000 Guests",
            promotion: "Limited Time Offer",
            route: "/royal-palace",
        },
        {
            images: VenueNoida2,
            name: "Grand Imperia",
            rating: 5,
            reviews: 20,
            location: "Greater Noida",
            price: "From ₹2,500",
            capacity: "150 to 2500 Guests",
            promotion: "Free Decoration",
            route: "/grand-imperia",
        },
        {
            images: VenueNoida3,
            name: "Elite Banquets",
            rating: 3.8,
            reviews: 9,
            location: "Greater Noida",
            price: "From ₹2,000",
            capacity: "100 to 2000 Guests",
            promotion: "10% Off",
            route: "/elite-banquets",
        },
        {
            images: VenueNoida4,
            name: "Star Wedding Hall",
            rating: 4.2,
            reviews: 15,
            location: "Greater Noida",
            price: "From ₹2,200",
            capacity: "300 to 3500 Guests",
            promotion: "Flat 5% Off",
            route: "/star-wedding-hall",
        },
        {
            images: VenueNoida1,
            name: "Moonlight Garden",
            rating: 4.6,
            reviews: 18,
            location: "Greater Noida",
            price: "From ₹2,800",
            capacity: "250 to 5000 Guests",
            promotion: "Special Summer Deal",
            route: "/moonlight-garden",
        }
    ];

    const [displayVenues, setDisplayVenues] = useState(3);

    useEffect(() => {
        if (location.pathname === "/Wedding_Venues_city") {
            setDisplayVenues(venues.length);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setDisplayVenues(3);
        }
    }, [location.pathname]);

    const handleShowAll = () => {
        navigate('/Wedding_Venues_city');
    };

    return (
        <>
            <h1 className="text-black text-2xl font-bold mb-6 p-1">Venues In Noida</h1>

            <div className=" p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
                {venues.slice(0, displayVenues).map((venue, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(venue.route)}
                        className="bg-white cursor-pointer rounded-lg shadow-md hover:shadow-lg transition duration-200 overflow-hidden"
                    >
                        <img
                            src={venue.images}
                            alt={venue.name}
                            className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
                        />
                        <div className="p-3 sm:p-4 text-black sm:text-sm">
                            <h1 className="text-lg sm:text-xl font-semibold truncate">{venue.name}</h1>
                            <div className="flex justify-between mt-1 sm:text-sm">
                                <p className="text-sm sm:text-base">{venue.rating} ⭐⭐⭐⭐⭐</p>
                                <h6 className="text-sm sm:text-base">{venue.location}</h6>
                            </div>
                            <div className="flex justify-between mt-1 text-xs sm:text-sm">
                                <h6 className="text-xs sm:text-sm">{venue.price}</h6>
                                <h6 className="text-xs sm:text-sm">{venue.capacity}</h6>
                            </div>
                            <h6 className="text-xs sm:text-sm text-red-500 mt-1">{venue.promotion}</h6>
                            <h6 className="text-xs sm:text-sm text-gray-600 mt-1">{venue.reviews} reviews</h6>
                        </div>
                    </div>
                ))}
            </div>



            {/* Discovery Location */}


            {location.pathname !== "/Wedding_Venues_city" && (
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={handleShowAll}
                        type="button"
                        className="text-black font-bold  px-6 py-3 rounded-md bg-[#d1c8c1] hover:brightness-105 transition"
                    >
                        Discover venues in Noida
                    </button>
                </div>
            )}
        </>
    );
}
