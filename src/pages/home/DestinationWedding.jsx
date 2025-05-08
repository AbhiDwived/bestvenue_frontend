import React, { useRef } from 'react';
import BanquetHall from "../../assets/Images/banquetHall1.png";

const destinations = [
  { country: "Brazil", image: BanquetHall },
  { country: "Chile", image: BanquetHall },
  { country: "Colombia", image: BanquetHall },
  { country: "France", image: BanquetHall },
  { country: "Italy", image: BanquetHall },
  { country: "Mexico", image: BanquetHall },
];

export default function DestinationCarousel() {
  const carouselRef = useRef();

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="m-5  my-5">
      <h2 className="fw-bold">Plan your destination wedding</h2>
      <p className="text-muted">
        No matter where in the world you want to get married, WeddingWire's directory of international wedding professionals can help you celebrate.
      </p>

      <div className="position-relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-2 shadow"
          style={{ borderRadius: '50%' }}
        >
          &#8592;
        </button>

        {/* Scrollable carousel container */}
        <div
          className="d-flex gap-4 px-5 py-4"
          ref={carouselRef}
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'none',          // Firefox
            msOverflowStyle: 'none',         // IE/Edge
            scrollBehavior: 'smooth'
          }}
          onWheel={(e) => {
            e.preventDefault();
            carouselRef.current.scrollLeft += e.deltaY;
          }}
        >
          {/* Hide scrollbar (for Chrome/Safari) */}
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {destinations.map((dest, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-center bg-white rounded-4 shadow-lg p-3"
              style={{
                width: '240px',
                height: '320px',
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={dest.image}
                alt={dest.country}
                className="img-fluid rounded-3 mb-3"
                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
              />
              <h5 className="fw-semibold">{dest.country}</h5>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-2 shadow"
          style={{ borderRadius: '50%' }}
        >
          &#8594;
        </button>
      </div>

      {/* Bottom button */}
      <div className="text-center mt-4">
        <button className="btn btn-dark px-4 py-2">
          Discover all destinations →
        </button>
      </div>
    </section>
  );
}
