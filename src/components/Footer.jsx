import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaUserTie } from 'react-icons/fa';
import AppStore from "../../src/assets/Images/AppStoreimage.png";

export default function WeddingFooter() {
  return (
    <footer className="bg-light pt-5 w-full  border-top ">

      {/* Top Divider with Icon */}
      <div className="position-relative mb-4">
        <hr className="m-0" />
        <div className="position-absolute top-50 start-50 translate-middle bg-white border rounded-circle p-3 shadow-sm">
          <FaUserTie size={24} />
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mb-4 px-3">
        <h5 className="fw-bold">Contact a wedding expert for free</h5>
        <p>We'd love to help you! 7 days a week from 9am to 8pm.</p>
        <p className="text-danger fw-bold fs-5">
          <span role="img" aria-label="phone">📞</span> Call 81-30-62-22-79
        </p>
      </div>

      {/* Footer Main Content */}
      <div className="m-5">
        <div className="row gy-4 text-center text-md-start">

          {/* Information Links */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Information</h6>
            <ul className="list-unstyled small">
              {[
                "Contact us",
                "Terms & privacy",
                "Your Privacy Choices",
                "Business login",
                "About us",
                "Editorial team & policies",
                "Careers",
                "Wedding Awards 2025",
                "Wedding website"
              ].map((text, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-dark text-decoration-none">{text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Store */}
          <div className="col-md-3">
            <h6 className="fw-bold">Get the WeddingWire app</h6>
            <p className="small">Plan your wedding on the go with our app.</p>
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <img src={AppStore} alt="App Store" width="140" className="mb-2" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width="150" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="col-md-3">
            <h6 className="fw-bold">Follow us on</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-2">
              <button className="btn btn-outline-secondary rounded-circle p-2"><FaFacebookF /></button>
              <button className="btn btn-outline-secondary rounded-circle p-2"><FaTwitter /></button>
              <button className="btn btn-outline-secondary rounded-circle p-2"><FaPinterestP /></button>
              <button className="btn btn-outline-secondary rounded-circle p-2"><FaInstagram /></button>
            </div>
          </div>

          {/* Country Dropdown */}
          <div className="col-md-3">
            <h6 className="fw-bold">Choose a country</h6>
            <select className="form-select mt-2">
              <option value="IN">🇮🇳 India</option>
              <option value="US">🇺🇸 USA</option>
              <option value="FR">🇫🇷 France</option>
              <option value="IT">🇮🇹 Italy</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="text-center py-4 mt-4 bg-dark text-white">
        <h5 className="mb-0" style={{ letterSpacing: '1px' }}>
          💍 MY<span className="text-warning">Best</span> Venue
        </h5>
        <p className="small mb-0">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
