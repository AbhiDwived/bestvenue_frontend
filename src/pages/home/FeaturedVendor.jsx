
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousalimage1 from "../../assets/Images/crouselimage.png";
import carousalimage2 from "../../assets/Images/carouelimage2.png";
import carousalimage3 from "../../assets/Images/carouselimage3.png";
import carousalimage4 from "../../assets/Images/carousel4image.png";
import { FaStar } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

const cards = [
  {
    id: 1,
    title: "Meraki Banquet",
    rating: 4.8,
    description: "A beautiful wedding by the sea with a breathtaking view and calming waves.",
    url: carousalimage1,
    address: "123 Beach St, Miami, FL",
    range_from: "$500",
    range_to: "$1000",
    promotion:"30% off"
  },
  {
    id: 2,
    title: "Royal Park Hall",
    rating: 4.6,
    description: "An intimate ceremony surrounded by lush greenery and vibrant flowers.",
    url: carousalimage2,
    address: "456 Garden St, New York, NY",
    range_from: "$500",
    range_to: "$1000",
    promotion:"30% off"
  },
  {
    id: 3,
    title: "V Club",
    rating: 4.9,
    description: "A charming wedding in a rustic barn with a cozy and warm atmosphere.",
    url: carousalimage3,
    address: "789 Country Rd, Nashville, TN",
    range_from: "$500",
    range_to: "$1000",
    promotion:"30% off"
  },
  {
    id: 4,
    title: "Ramaya Grand Hall",
    rating: 4.7,
    description: "A memorable wedding at an exotic location, offering a unique cultural experience.",
    url: carousalimage4,
    address: "901 Paradise St, Honolulu, HI",
    range_from: "$500",
    range_to: "$1000",
    promotion:"30% off"
  },
  {
    id: 4,
    title: "My Best Venue",
    rating: 4.7,
    description: "A memorable wedding at an exotic location, offering a unique cultural experience.",
    url: carousalimage4,
    address: "901 Paradise St, Honolulu, HI",
    range_from: "$500",
    range_to: "$1000",
    promotion:"30% off",
  },
  {
    id: 4,
    title: "Prince Inn Venue ",
    rating: 4.7,
    description: "A memorable wedding at an exotic location, offering a unique cultural experience.",
    url: carousalimage4,
    address: "901 Paradise St, Honolulu, HI",
    range_from: "$500",
    range_to: "$1000",
    promotion:"30% off",
  },
  {
    id: 4,
    title: "My Best Venue",
    rating: 4.7,
    description: "A memorable wedding at an exotic location, offering a unique cultural experience.",
    url: carousalimage4,
    address: "901 Paradise St, Honolulu, HI",
    range_from: "$500",
    range_to: "$1000",
    promotion:"30% off",
  },
];

const FeaturedVendor = () => {
   return (
      <div className="  m-5">
        <h2 className="text-2xl font-bold mb-4">Featured  Wedding Venues</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay centerMode centerSlidePercentage={33.33} show={4}>
          {cards.map((card) => (
            <div key={card.id} className="card mx-2 shadow-md shadow-[0_0_5px_rgba(139,0,0,0.5)]">
              <img 
                src={card.url} 
                alt={card.title} 
                className="card-img-top border-2 border-red-500 rounded-lg transition-transform duration-300 hover:scale-110" 
                style={{borderRadius: "1rem"}} 
              />
              <div className="absolute top-2 left-2 bg-red-500 text-gray-800 font-semibold px-2 py-1 border-2 border-white rounded flex items-center">
                <IoIosPricetags className="mr-1" style={{ fontSize: "1rem" }} />PREMIUM
              </div>
              <div className="card-body space-y-2">
                <h5 className="card-title text-lg font-semibold">{card.title}</h5>
                <p className="card-text flex items-center">
                  <FaStar style={{ color: "#ffd700", fontSize: "1.5rem", marginRight: "0.5rem" }} />
                  <span className="text-sm">{card.rating} (20)</span>
                </p>
                <p className="card-text text-sm text-gray-500">{card.address}</p>
                <p className="card-text flex items-center"><FaCoins className="mr-1" style={{ fontSize: "1.25rem" }} />{card.range_from} per <IoPersonOutline /></p>
                <p className="card-text flex items-center">
                  <IoIosPricetags className="mr-1" style={{ fontSize: "1.25rem" }} />
                  <span className="text-sm text-red-500 text-bold">1 promotion {card.promotion}</span>
                </p>
              </div>
            </div>
          ))}
        </Carousel>

        <div className='flex justify-center gap-2 mt-5 flex-wrap md:flex-nowrap'>
            <button className='bg-red-500 text-white-800  text-bold px-3 py-2 rounded w-full md:w-auto md:flex-shrink-0 h-[55px]'>Wedding Venues</button>
            <button className='bg-red-500 text-white-800 px-3 py-2 rounded w-full md:w-auto md:flex-shrink-0 h-[55px]'>Wedding Photographer</button>
            <button className='bg-red-500 text-white-800 px-3 py-2 rounded w-full md:w-auto md:flex-shrink-0 h-[55px]'>Wedding Planners</button>
            <button className='bg-red-500 text-white-800 px-3 py-2 rounded w-full md:w-auto md:flex-shrink-0 h-[55px]'>Bridal makeuip artist</button>
            <button className='bg-red-500 text-white-800 px-3 py-2 rounded w-full md:w-auto md:flex-shrink-0 h-[55px]'>Bridal makeuip artist</button>
            <button className='bg-red-500 text-white-800 px-3 py-2 rounded w-full md:w-auto md:flex-shrink-0 h-[55px]'>Bridal makeuip artist</button>
        </div>
      </div>
    );
}

export default FeaturedVendor