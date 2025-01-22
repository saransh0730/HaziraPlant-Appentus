import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="nav-logo.png"
            alt="ONGC Logo"
            className="footer-logo-image"
          />
          <h3>HAZIRA PLANT</h3>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <div className="links-columns">
            <ul>
              <li>BA Set Donning Procedure</li>
              <li>File Sharing System</li>
              <li>Rajbhasa</li>
              <li>Anmol Dharohar Drawings</li>
              <li>Event Photos</li>
              <li>ASTO CWC</li>
            </ul>
            <ul>
              <li>ASTO Mumbai</li>
              <li>All India SCSTEWA (Hazira)</li>
              <li>OBC and MOBC Association (Hazira)</li>
              <li>Samanvay</li>
              <li>Govt e-Market Place (GeM)</li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email Address</li>
          </ul>
        </div>

        <div className="footer-admin">
          <h4>Admin</h4>
        </div>

        <div className="footer-visitor">
          <h4>Visitor Count</h4>
          <p>Today Visitor: <strong>142</strong></p>
          <p>All Time Visitor: <strong>25,485</strong></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Design & Development by 
          <img
            src="appentus.png"
            alt="Company Logo"
            className="footer-company-logo"
          />
          Appentus Technologies Pvt Ltd
        </p>
      </div>
    </footer>
  );
}

export default Footer;
