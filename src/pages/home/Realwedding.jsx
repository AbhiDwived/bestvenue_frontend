
import React from 'react';
import image1 from "../../assets/Images/realwedding2.jpg";

import { FaArrowRight } from "react-icons/fa";

const RealWeddings = () => {
  const weddings = [
    {
      Header: "Ankita & Advit",
      photos: 57,
      location: "Mumbai Central, Mumbai",
      mainImage: { image1 },
      thumbnails: [
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
      ],
    },
    {
      Header: "Saumya & Rohit",
      photos: 75,
      location: "MG Road, Gurgaon",
      mainImage: { image1 },
      thumbnails: [
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
      ],
    },
    {
      Header: "Suminder & Deepika",
      photos: 37,
      location: "Dera Bassi, Zirakpur",
      mainImage: { image1 },
      thumbnails: [
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
      ],
    },
    {
      Header: "Sachee & Himanshu",
      photos: 35,
      location: "Samalka, South Delhi",
      mainImage: { image1 },
      thumbnails: [
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
        "https://via.placeholder.com/60x60",
      ],
    },
  ];

  

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-2">Real Weddings</h2>
        <p className="text-muted mb-4">
          Get inspired by real couples in your area and find wedding suppliers you love.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {weddings.map((wedding, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src={wedding.mainImage.image1}
                  alt={`${wedding.Header} main image`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{wedding.Header}</h5>
                  <p className="card-text">
                    <strong>Photos:</strong> {wedding.photos}<br />
                    <strong>Location:</strong> {wedding.location}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Last updated {Math.floor(Math.random() * 60)} mins ago
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5 text-center">
        <button type="button" className="btn btn-danger m-3 text-bold font-weight-bolder">
          Explore More Real Wedding <FaArrowRight style={{ color: "white" }} />
        </button>
      </div>
 
      

    </>
  );
};

export default RealWeddings;

