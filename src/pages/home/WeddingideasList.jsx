
// import venue from "../../assets/Images/besthomeimage.jpg";
// import wedding from "../../assets/Images/realwedding1.jpeg";
// import wedding2 from "../../assets/Images/realwedding2.jpg";
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


const cards = [
  {
    id: 1,
    title: "Beach Wedding",
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
    title: "Garden Wedding",
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
    title: "Rustic Barn Wedding",
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
    title: "Destination Wedding",
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
    title: "Destination Wedding",
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
    title: "Destination Wedding",
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
    title: "Destination Wedding",
    rating: 4.7,
    description: "A memorable wedding at an exotic location, offering a unique cultural experience.",
    url: carousalimage4,
    address: "901 Paradise St, Honolulu, HI",
    range_from: "$500",
    range_to: "$1000",
    promotion:"30% off",
  },
];

const WeddingideasList = () => {
  return (
    <div className="  m-5">
      <Carousel showThumbs={false} infiniteLoop autoPlay centerMode centerSlidePercentage={33.33} show={4}>
        {cards.map((card) => (
          <div key={card.id} className="card mx-2 shadow-md shadow-[0_5px_0_5px_rgba(139,0,0,0.5)]">
            <img 
              src={card.url} 
              alt={card.title} 
              className="card-img-top border-2 border-red-500 rounded-lg transition-transform duration-300 hover:scale-110" 
              style={{borderRadius: "1rem"}} 
            />
            <div className="card-body space-y-2">
              <h5 className="card-title text-lg font-semibold">{card.title}</h5>
              <p className="card-text flex items-center">
                <FaStar style={{ color: "#ffd700", marginRight: "0.5rem" }} />
                <span className="text-sm">{card.rating} (20)</span>
                <span className="text-sm text-gray-500 ml-2">- {card.address}</span>
              </p>
              <p className="card-text flex items-center">
                <FaCoins className="mr-1" />
                <span className="text-sm">{card.range_from}</span>
                <span className="mx-1">to</span>
                <FaCoins className="mr-1" />
                <span className="text-sm">{card.range_to}</span>
              </p>
              <p className="card-text flex items-center">
                <IoIosPricetags className="mr-1" />
                <span className="text-sm">promotion {card.promotion}</span>
              </p>
            </div>
          </div>
        ))}
        {/* On larger screens, you can adjust the layout using media queries in Tailwind classes (e.g., md:show={3} for 3 cards on medium screens, lg:show={4} for 4 cards on large screens). */}
      </Carousel>
    </div>
  );
};

export default WeddingideasList;

