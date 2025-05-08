import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  hotel1 from "../../assets/Images/hotel01.jpeg";
import hotel2 from "../../assets/Images/hotel02.jpeg";
import hotel3 from  "../../assets/Images/hotel03.jpeg";
import hotel4 from  "../../assets/Images/hotel04.png";
import { Search } from 'lucide-react';
import Searchpage from './Search';

const venues = [
  { city: 'Noida', count: 444, img: hotel1 },
  { city: 'New Delhi', count: 751, img: hotel2 },
  { city: 'Jaipur', count: 919, img: hotel3 },
  { city: 'Chennai', count: 339, img: hotel1 },
  { city: 'Delhi NCR', count: 1932, img: hotel2 },
  { city: 'Lucknow', count: 484, img: hotel3 },
  { city: 'Kolkata', count: 272, img: hotel4 },
];


const  RegionCarousel=()=> {
    const [slidePercentage, setSlidePercentage] = useState(25); // Default to 4 per row
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1200) setSlidePercentage(20); // 5 cards
        else if (width >= 992) setSlidePercentage(25); // 4 cards
        else if (width >= 768) setSlidePercentage(33.33); // 3 cards
        else if (width >= 480) setSlidePercentage(50); // 2 cards
        else setSlidePercentage(100); // 1 card
      };
  
      handleResize(); // Set on load
      window.addEventListener('resize', handleResize); // Update on resize
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className="">
        <Searchpage/>
        <h4 className="fw-bold mb-4 mt-5">Venues by region</h4>
  
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
            <div key={index} className="text-center px-2">
              <div
                className="mx-auto mb-2 shadow"
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={venue.img}
                  alt={venue.city}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h6 className="fw-semibold mb-0">{venue.city}</h6>
              <small className="text-muted">{venue.count.toLocaleString()} venues</small>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
  export default RegionCarousel; 