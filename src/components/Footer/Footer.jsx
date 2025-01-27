import React from 'react';
import './Footer.css'; // Optional: Add custom styles for your footer

const Footer = () => {
  return (
    <footer className="text-center  mt-4 border-top">
      <div className="d-flex flex-wrap justify-content-between">
        {/* Address Section */}
        <div className="footer-item mb-3">
          <p className="title"><strong>Address:</strong></p>
          <p>Vasireddy Venkatadri Institute of Technology, Nambur (V), Peda Kakani (Md), Guntur (Dt), Andhra Pradesh, 522508</p>
        </div>

        {/* Phone Section */}
        <div className="footer-item mb-3">
          <p className="title"><strong>Phone:</strong></p>
          <p>9951 023 336<br />9849 542 336</p>
        </div>

        {/* Email Section */}
        <div className="footer-item mb-3">
          <p className="title"><strong>Email:</strong></p>
          <p><a href="mailto:info@vvit.ac.in">info@vvit.ac.in</a></p>
        </div>

        {/* Social Media Links */}
        <div className="footer-item mb-3">
          <p className="title"><strong>Follow Us:</strong></p>
          <a href="https://www.instagram.com/vvit__official" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="Instagram">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/groups/13853498/" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="LinkedIn">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-3">
        <p className="title"><strong>&copy; 2025 Vasireddy Venkatadri Institute of Technology.</strong> 
          <a href="https://www.vvitguntur.com/">Terms of Use</a> | 
          <a href="https://www.vvitguntur.com/">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
