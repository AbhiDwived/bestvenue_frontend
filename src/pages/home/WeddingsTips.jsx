import React from 'react';
import ideas from '../../assets/Images/ideas.jpg'; // Your actual image

const cards = [
  { id: 1, title: 'Before the wedding', text: 'This is a sample description.', img: ideas },
  { id: 2, title: 'The wedding ceremony', text: 'Another quick description.', img: ideas },
  { id: 3, title: 'Reception Planning', text: 'Something interesting here.', img: ideas },
  { id: 4, title: 'Wedding Fashion', text: 'Useful content for weddings.', img: ideas },
  { id: 5, title: 'Health & Beauty', text: 'Extra content goes here.', img: ideas },
  { id: 6, title: 'Wedding Services', text: 'Vendors, venues and more.', img: ideas },
  { id: 7, title: 'Honeymoon Ideas', text: 'Where to go and what to pack.', img: ideas },
];

const WeddingsTips = () => {
  return (
    <div className="m-5">
      <h2 className="text-center text-3xl font-bold text-red-500 mb-2">Wedding Ideas and Tips</h2>
      <p className="text-center text-gray-600 mb-5 text-lg">
        Get inspired with the latest trends and expert advice for your perfect day.
      </p>

      <div className="row">
        {cards.map((card) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" key={card.id}>
            <div className="card w-100 shadow-sm border-0 rounded-4 h-100 d-flex flex-column justify-content-between hover-shadow transition-transform hover:scale-105">
              <div className="p-4 d-flex justify-content-center bg-light">
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-circle"
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    border: '4px solid white',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                />
              </div>
              <div className="card-body text-center px-3 pb-4">
                <h5 className="card-title fw-semibold text-dark">{card.title}</h5>
                <p className="card-text text-muted small">{card.text}</p>
                <a
                  href="#"
                  className="btn btn-outline-danger btn-sm mt-2 rounded-pill px-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingsTips;
