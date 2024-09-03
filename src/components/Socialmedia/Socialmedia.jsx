import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "./Socialmedia.css";

const Socialmedia = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ textTransform: 'uppercase' }}>Follow Us</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={iconStyle}
          className="icon"
        >
          <FaFacebookF size={30} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={iconStyle}
          className="icon"
        >
          <FaTwitter size={30} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={iconStyle}
          className="icon"
        >
          <FaInstagram size={30} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={iconStyle}
          className="icon"
        >
          <FaLinkedinIn size={30} />
        </a>
      </div>
    </div>
  );
};

const iconStyle = {
  margin: '0 10px',
  color: 'white',
  transition: 'transform 0.3s ease-in-out',
};

export default Socialmedia;
