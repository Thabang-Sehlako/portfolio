import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'wheat' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="navbar-brand">Emma</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="#carouselExample"
                className="nav-link"
                onClick={() => scrollToSection('carouselExample')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#gallery"
                className="nav-link"
                onClick={() => scrollToSection('gallery')}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#about"
                className="nav-link"
                onClick={() => scrollToSection('about')}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#contact"
                className="nav-link"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
