import React from 'react';
import './Footer.css';
import Instagram from '../../assets/instagram.png';
import Logo from '../../assets/Black Panther Gym-Photoroom.png';
import Contact from '../../assets/phone.png';
import Map from '../../assets/Map.png';

const Footer = () => {
  return (
    <div id="footer" className="Footer-container"  >
      <hr />
      <div className="footer" >
        <div className="social-links" >
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/black_panther_fitness__?igsh=ODBiNzN3dXZybWd3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={Instagram} alt="Instagram" />
          </a>

          {/* Logo Image */}
          <a href="/" aria-label="Home" id='logo1'>
            <img src={Logo} alt="Logo" />
          </a>

          {/* Phone Contact Link */}
          <a href="tel:+919630797626" aria-label="Call Contact">
            <img src={Contact} alt="Phone Contact" />
          </a>
        </div>
      </div>

      <div className="Logo-f" id='map'>
      <a
            href="https://maps.app.goo.gl/zTa73vXD9ZA2g4Wy9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={Map} alt="Map" />
          </a>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
