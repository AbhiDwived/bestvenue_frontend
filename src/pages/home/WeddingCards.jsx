import React from 'react';
import icon1 from "../../assets/Images/iconimages.png";
import homeicon from "../../assets/Images/homelogo.jpeg";
import locationicon from "../../assets/Images/locationlogo.jpeg";
import vectorlogo from "../../assets/Images/vecotorlogo.jpg";

const tools = [
  {
    title: "Sachee & Himanshu",
    description: "Samalka, South Delhi",
    icon: icon1,
    linkText: "Learn More",
  },
  {
    title: "Ankita & Advit",
    description: "Mumbai Central, Mumbai",
    icon: homeicon,
    linkText: "Learn More",
  },
  {
    title: "Saumya & Rohit",
    description: "MG Road, Gurgaon",
    icon: locationicon,
    linkText: "Learn More",
  },
  {
    title: "Saumya & Rohit",
    description: "MG Road, Gurgaon",
    icon: vectorlogo,
    linkText: "Learn More",
  },
  {
    title: "Saumya & Rohit",
    description: "MG Road, Gurgaon",
    icon: locationicon,
    linkText: "Learn More",
  },
  {
    title: "Suminder & Deepika",
    description: "Dera Bassi, Zirakpur",
    icon: homeicon,
    linkText: "Learn More",
  },
];

const WeddingCards = () => {
  return (
    <div className=" m-5 mb-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {tools.map((tool, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="d-flex flex-column flex-lg-row h-100">
                
                {/* Image Section: top on mobile/tablet, right on desktop */}
                <div className="text-center p-3 p-lg-0 d-flex align-items-center justify-content-center">
                  <img
                    src={tool.icon}
                    alt={tool.title}
                    className="img-fluid rounded"
                    style={{ maxWidth: '100px', height: 'auto' }}
                  />
                </div>

                {/* Text Section */}
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title mb-1">{tool.title}</h5>
                  <p className="card-text mb-2">{tool.description}</p>
                  <p className="card-text">
                    <small className="text-danger fw-bold text-decoration-underline">
                      {tool.linkText}
                    </small>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCards;
