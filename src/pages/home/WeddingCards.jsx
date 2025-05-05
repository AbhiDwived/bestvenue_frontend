import React from 'react'
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
      
    }
  ];
const WeddingCards = () => {

    
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 mx-auto" style={{width: "fit-content"}}>
      {tools.map(tool => (
        <div className="col" key={tool.title}>
          <div className="card h-100">
            <div className="row no-gutters h-100">
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title">{tool.title}</h5>
                  <p className="card-text">{tool.description}</p>
                  <p className="card-text "><small className=" text-decoration-underline text-danger fw-bold " >{tool.linkText}</small></p>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <img src={tool.icon} className="card-img-top rounded-end" alt={tool.iconAlt} />
              </div>
            </div>
          </div>
         
        </div>
      ))}
    </div>

  )
}

export default WeddingCards
