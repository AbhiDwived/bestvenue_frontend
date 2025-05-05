import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every(ref => ref && !ref.contains(event.target))
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary border">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg" alt="Logo" height="30" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-style-cursive">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Planning Tool</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Wedding_venues">Wedding Venue</Link>
            </li>

            {[1, 2, 3].map((idx) => (
              <li
                className="nav-item dropdown"
                key={idx}
                ref={(el) => (dropdownRefs.current[idx] = el)}
              >
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDropdownToggle(idx);
                  }}
                >
                  Wedding Vendor
                </a>
                <ul className={`dropdown-menu ${activeDropdown === idx ? 'show' : ''}`}>
                  <li><Link className="dropdown-item" to="/service1">Service 1</Link></li>
                  <li><Link className="dropdown-item" to="/service2">Service 2</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/more">Blogs</Link></li>
                </ul>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-column align-items-end">
            <Link to="/vendor-login" className="btn btn-link text-black d-flex align-items-center gap-1 mb-2">
              <FiShoppingCart size={18} /> <span>ARE YOU A VENDOR?</span>
            </Link>
            <div className="d-flex gap-2">
              <Link className="btn btn-outline-danger" to="/login">Login</Link>
              <Link className="btn btn-danger" to="/register">Free Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;


