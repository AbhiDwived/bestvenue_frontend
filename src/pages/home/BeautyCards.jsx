import React from 'react';
import beauty from "../../assets/Images/beautyImages.png";
import { FaArrowRight } from "react-icons/fa";

const cards = [
  {
    image: beauty,
    title: "Before the wedding",
    description: "Editor's Picks: Top 20 Summer Wedding Locations & Venues to Beat the Heat",
  },
  {
    image: beauty,
    title: "Before the wedding",
    description: "Editor's Picks: Top 20 Summer Wedding Locations & Venues to Beat the Heat",
  },
  {
    image: beauty,
    title: "The Bride",
    description: "40+ Stunning Backless Blouse Designs for the Divas",
  },
  {
    image: beauty,
    title: "Beauty for brides",
    description: "Summer Makeup Trends and an Application Guide for 2025 Brides",
  },
  {
    image: beauty,
    title: "Planning Your Wedding",
    description: "#PehleApp: The One App That’s Making Indian Wedding Planning 10x Easier",
  },
  {
    image: beauty,
    title: "Wedding photographers",
    description: "Editor's Picks: Top 20 Summer Wedding Locations & Venues to Beat the Heat",
  },
];

const BeautyCards = () => {
  return (
    <div className="m-5 py-5">
      <h2 className="text-center text-3xl fw-bold text-danger mb-4">Beauty & Bridal Tips</h2>
      <p className="text-center text-muted mb-5 fs-5">Explore the latest trends in bridal beauty, fashion, and planning.</p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        {cards.map((card, index) => (
          <div key={index} className="col d-flex">
            <div className="card shadow-sm rounded-4 border-0 w-100 h-100">
              <img
                src={card.image}
                className="card-img-top rounded-top-4"
                alt={card.title}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="text-danger fw-semibold mb-1">{card.title}</p>
                <p className="text-dark fw-bold">{card.description}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
      <div className="d-flex justify-content-center mt-4 align-items-center">
        <button className='text-bold  text-white bg-danger px-4 py-2 rounded-3 d-inline-flex items-center'>
          BrowseAll Article <FaArrowRight style={{color:"white", marginLeft: "0.5rem"}} className='self-center'/>
        </button>
      </div>
    </div>
  );
};

export default BeautyCards;
