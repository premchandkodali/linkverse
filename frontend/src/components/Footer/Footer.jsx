import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Address Section */}
      <div className="footer-item">
        <p className="title"><strong>Address:</strong></p>
        <p>Vasireddy Venkatadri Institute of Technology, Nambur (V), Peda Kakani (Md), Guntur (Dt), Andhra Pradesh, 522508</p>
      </div>

      {/* Phone Section */}
      <div className="footer-item">
        <p className="title"><strong>Phone:</strong></p>
        <p>9951 023 336<br />9849 542 336</p>
      </div>

      {/* Email Section */}
      <div className="footer-item">
        <p className="title"><strong>Email:</strong></p>
        <p><a href="mailto:info@vvit.ac.in">info@vvit.ac.in</a></p>
      </div>

      {/* Social Media Links */}
      <div className="footer-item">
        <h3 className="title">Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p><strong>&copy; 2025 Vasireddy Venkatadri Institute of Technology.</strong> 
          <a href="https://www.vvitguntur.com/"> Terms of Use</a> | 
          <a href="https://www.vvitguntur.com/"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
