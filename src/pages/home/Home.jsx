import React from 'react';
import cardVenue from "../../assets/Images/venuecardimage1.jpg";
import cardVenue2 from "../../assets/Images/venuecard2.jpeg";
import { Link } from 'react-router-dom';
import RealWeddings from './Realwedding';
import WeddingCards from './WeddingCards';
import WeddingsAwards from './WeddingsAwards';
import { Search } from 'lucide-react';
import SearchPage from './Search';

const Home = () => {
  const cardData = [
    {
      title: "Wedding Venues",
      description: "Find the best venues for your perfect day.",
      lastUpdated: "Last updated 3 mins ago",
      image: cardVenue,
    },
    {
      title: "Catering Services",
      description: "Discover top-tier wedding catering options.",
      lastUpdated: "Last updated 5 mins ago",
      image: cardVenue2,
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
    // <div className="w-300 bg-pink-100">
    //   <SearchPage />
    //   <h1 className="mb-3">Enjoy planning your wedding</h1>
    //   <p className="mb-4">Start planning your wedding with us, it's free!</p>
    //   <div className="row">
    //     {cardData.map((card, index) => (
    //       <div className="col-md-6 mb-4" key={index}>
    //         <div className="card h-100">
    //           <div className="row g-0">
    //             <div className="col-md-8">
    //               <div className="card-body d-flex flex-column justify-content-between h-100">
    //                 <div>
    //                   <h5 className="card-title">{card.title}</h5>
    //                   <p className="card-text">{card.description}</p>
    //                 </div>
    //                 <div className="d-flex justify-content-between mt-auto">
    //                   <small className="text-muted">{card.lastUpdated}</small>
    //                   <Link to="/explore" className="text-decoration-none text-danger">
    //                     Explore Venue
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-4">
    //               <img
    //                 src={card.image}
    //                 className="card-img-top img-fluid"
    //                 alt={card.title}
    //                 style={{ objectFit: 'cover', height: '200px' }}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <RealWeddings />
    //   <WeddingCards />
    //   <WeddingsAwards />
    // </div>
    <div className="w-full min-h-screen  mt-20 px-0">
  <SearchPage />
  <h1 className="mb-3 text-center">Enjoy planning your wedding</h1>
  <p className="mb-4 text-center">Start planning your wedding with us, it's free!</p>
  
  <div className="flex flex-wrap -mx-2">
    {cardData.map((card, index) => (
      <div className="w-full md:w-1/2 px-2 mb-4" key={index}>
        <div className="card h-100">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body d-flex flex-column justify-content-between h-100">
                <div>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
                <div className="d-flex justify-content-between mt-auto">
                  <small className="text-muted">{card.lastUpdated}</small>
                  <Link to="/explore" className="text-decoration-none text-danger">
                    Explore Venue
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={card.image}
                className="card-img-top img-fluid"
                alt={card.title}
                style={{ objectFit: 'cover', height: '200px' }}
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  <RealWeddings />
  <WeddingCards />
  <WeddingsAwards />
</div>

  );
};

export default Home;

