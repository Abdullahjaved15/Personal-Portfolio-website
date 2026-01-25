import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Abdullah Javed</h3>
            <p>Computer Science Student & Developer</p>
          </div>
          <div className="footer-links">
            <a href="mailto:abdullahch23504@gmail.com" className="footer-link">
              📧 Email
            </a>
            <a href="tel:0327-6776015" className="footer-link">
              📱 Phone
            </a>
            <a href="https://www.linkedin.com/in/abdullah-javed-646368315/" target="_blank" rel="noopener noreferrer" className="footer-link">
              💼 LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Abdullah Javed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 