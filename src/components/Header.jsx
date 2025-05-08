import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import Logo from "../assets/Images/Logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

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
    <nav className="navbar navbar-expand-lg bg-body-tertiary border px-3 p-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Logo"
            height="10"
            width={100}
            // style={{ height: '15%',width:'10%' }}
          />
        </Link>

        {/* Hamburger Icon - Visible only on mobile/tablet */}
        <button
          className="d-lg-none border-0 bg-transparent"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Collapsible Menu */}
        <div
          className={`w-100 mt-3 mt-lg-0 ${isOpen ? 'd-block' : 'd-none'} d-lg-flex justify-content-between align-items-center`}
        >
          {/* Left Side Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Planning Tool</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Wedding_Venues">Wedding Venue</Link>
            </li>

            {[1].map((idx) => (
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

          {/* Right Side Buttons */}
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2">
            <Link
              to="/vendor"
              className="btn btn-link text-black d-flex align-items-center gap-1"
            >
              <FiShoppingCart size={18} />
              <span>ARE YOU A VENDOR?</span>
            </Link>
            <div className="d-flex gap-2">
              <Link className="btn btn-outline-danger" to="/login">Login</Link>
              <Link className="btn btn-danger" to="/signup">Free Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
