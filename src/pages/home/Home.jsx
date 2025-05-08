import React from 'react';
import cardVenue from "../../assets/Images/venuecardimage1.jpg";
import cardVenue2 from "../../assets/Images/venuecard2.jpeg";
import { Link } from 'react-router-dom';
import RealWeddings from './Realwedding';
import WeddingCards from './WeddingCards';
import WeddingsAwards from './WeddingsAwards';
import WeddingideasList from './WeddingideasList';
import { Search } from 'lucide-react';
import SearchPage from './Search';
import FeaturedVendor from './FeaturedVendor';
import WeddingsTips from './WeddingsTips';
import BeautyCards from './BeautyCards';
import Community from './Community';
import WeddingSite from './WeddingSite';
import DestinationWedding from './DestinationWedding';

const Home = () => {
  const cardData = [
    {
      title: "Wedding Venues",
      description: "Find the best venues for your perfect day.",
      lastUpdated: "Last updated 3 mins ago",
      image: cardVenue,
      link:"/venue_by_region"
    },
    {
      title: "Catering Services",
      description: "Discover top-tier wedding catering options.",
      lastUpdated: "Last updated 5 mins ago",
      image: cardVenue2,
      link:"/wedding_vendor",
    },
    {
      title: "Photographers",
      description: "Capture your moments with the best photographers.",
      lastUpdated: "Last updated 10 mins ago",
      image: cardVenue,
    },
    {
      title: "Decor Services",
      description: "Get beautiful decor to match your theme.",
      lastUpdated: "Last updated 15 mins ago",
      image: cardVenue,
    },
  ];

  return (

    <div className="w-full min-h-screen  ">
      <SearchPage />

      {/* Heading */}
      <div className="text-left mb-12 mt-5 gap-8 px-4 sm:px-6 lg:px-8">

        <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Plan Your Dream Wedding Effortlessly
        </h4>
        <p className="text-gray-600 mb-6">
          Discover venues, connect with top vendors, and manage every detail — all in one place, beautifully and easily.
        </p>
      </div>

      {/* Card Grid: 1 col on xs, 2 on sm/md, 4 on lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md flex overflow-hidden h-64"
          >
            {/* Left: Text */}
            <div className="w-2/5 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </div>
              <Link
                to={card.link}
                className="text-red-500 font-medium mt-4 hover:underline"
              >
                {index % 2 === 0 ? "Explore venues" : "Start your search"}
              </Link>
            </div>

            {/* Right: Image with soft curve */}
            <div className="relative w-3/5 h-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white curved-mask pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>






      {/* Other Sections */}
      <RealWeddings />
      <WeddingCards />
      <WeddingsAwards />
      <WeddingideasList />
      <FeaturedVendor />
      <WeddingsTips />
      <BeautyCards />
      <Community/>
      <WeddingSite />
      <DestinationWedding/>
    </div>












  );
};

export default Home;

