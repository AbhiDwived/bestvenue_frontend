import React from 'react';
import RamaBanquet from "../../assets/Images/ramabanquet.png";
import RamaBanquet2 from "../../assets/Images/ramabanquetHall2.png";
import { FaArrowRight } from "react-icons/fa";

const templates = [
  {
    id: 1,
    desktop: RamaBanquet,
    mobile: RamaBanquet2,
  },
  {
    id: 2,
    desktop: RamaBanquet,
    mobile: RamaBanquet2,
  },
  {
    id: 3,
    desktop: RamaBanquet,
    mobile: RamaBanquet2,
  },
  {
    id: 4,
    desktop: RamaBanquet,
    mobile: RamaBanquet2,
  },
  {
    id: 5,
    desktop:RamaBanquet2,
    mobile:  RamaBanquet,
  },
  {
    id: 6,
    desktop: RamaBanquet,
    mobile: RamaBanquet2,
  }
];

export default function WeddingWebsiteGallery() {
  return (
    <section className="container my-5">
      <h2 className="fw-bold">Create your wedding website</h2>
      <p className="text-muted">Quickly set up and share all of your details in one place.</p>

      <div className="row g-4 mt-4">
        {templates.map((template) => (
          <div className="col-12 col-sm-6 col-lg-4" key={template.id}>
            <div
              className="bg-light rounded p-3 h-100"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {/* Desktop view */}
              <img
                src={template.desktop}
                alt={`Desktop Preview ${template.id}`}
                className="img-fluid rounded w-100"
              />

              {/* Mobile view - overlaid */}
              <img
                src={template.mobile}
                alt={`Mobile Preview ${template.id}`}
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '10%',
                  width: '35%',
                  borderRadius: '8px',
                  boxShadow: '0 0 8px rgba(0,0,0,0.2)',
                }}
              />
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center mt-4 align-items-center">
                <button className='text-bold  text-white bg-danger px-4 py-2 rounded-3 d-inline-flex items-center'>
                 Check Out More Designs<FaArrowRight style={{color:"white", marginLeft: "0.5rem"}} className='self-center'/>
                </button>
              </div>
      </div>

    </section>
  );
}
