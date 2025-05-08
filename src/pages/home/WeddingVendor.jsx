import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hotel1 from "../../assets/Images/hotel01.jpeg";
import hotel2 from "../../assets/Images/hotel02.jpeg";
import hotel3 from "../../assets/Images/hotel03.jpeg";
import hotel4 from "../../assets/Images/hotel04.png";
import Searchpage from './Search';

const venues = [
  { city: 'Photography and video', count: 444, img: hotel1 },
  { city: 'Caterers Delhi', count: 751, img: hotel2 },
  { city: 'Wedding Planners', count: 919, img: hotel3 },
  { city: 'Transportation', count: 339, img: hotel1 },
  { city: 'Wedding Cards and Invitations', count: 1932, img: hotel2 },
  { city: 'Flower Decoration', count: 484, img: hotel3 },
  { city: 'Entertainment', count: 272, img: hotel4 },
];

const WeddingVendor = () => {
  const [slidePercentage, setSlidePercentage] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) setSlidePercentage(20);
      else if (width >= 992) setSlidePercentage(25);
      else if (width >= 768) setSlidePercentage(33.33);
      else if (width >= 480) setSlidePercentage(50);
      else setSlidePercentage(100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="">
      <Searchpage />
      <h4 className="fw-bold mb-4  m-5 mt-5">Explore Wedding Vendors By Category</h4>

      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        swipeable
        emulateTouch
        centerMode
        centerSlidePercentage={slidePercentage}
        autoPlay={false}
      >
        {venues.map((venue, index) => (
          <div key={index} className="px-2">
            <div
              className="card shadow-sm border-0"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <img
                src={venue.img}
                alt={venue.city}
                style={{
                  width: '120%',
                  height: '160px',
                  objectFit: 'cover',
                }}
              />
              <div className="p-2 text-center">
                <h6 className="fw-semibold mb-1">{venue.city}</h6>
                <small className="text-muted">
                  {venue.count.toLocaleString()} Vendors
                </small>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WeddingVendor;
