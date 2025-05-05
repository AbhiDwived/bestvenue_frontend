import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import venue from "../../assets/Images/besthomeimage.jpg";
import wedding from "../../assets/Images/realwedding1.jpeg";
import wedding2 from "../../assets/Images/realwedding2.jpg";

const slides = [
  { img: venue, title: "Slide One", description: "This is the first slide." },
  { img: wedding, title: "Slide Two", description: "This is the second slide." },
  { img: wedding2, title: "Slide Three", description: "This is the third slide." },
  { img: venue, title: "Slide Four", description: "This is the fourth slide." },
  { img: wedding2, title: "Slide Five", description: "This is the fifth slide." },
  { img: wedding, title: "Slide Six", description: "This is the sixth slide." },
  { img: venue, title: "Slide Seven", description: "This is the seventh slide." },
];

const WeddingIdeasCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-6 py-8 bg-gray-50">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="text-center bg-white p-6 rounded-lg shadow-xl">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-48 h-48 mx-auto rounded-full object-cover shadow-md mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800">{slide.title}</h3>
            <p className="text-sm text-gray-600">{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WeddingIdeasCarousel;
