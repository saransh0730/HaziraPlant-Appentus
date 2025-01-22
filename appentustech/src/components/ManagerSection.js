import React from "react";
import "../styles/ManagerSection.css";

function ManagerSection() {
  return (
    <div className="manager-section-container">
    <div className="heading">
    <h2 className="section-title">Plant Manager</h2>
    </div>
      <div className="manager-card">
        <img
          src="manager.webp"
          alt="Manager"
          className="manager-image"
        />
        <div className="manager-details">
          <h3 className="manager-name">Manager Name</h3>
          <p className="manager-description">
            Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet eu
            cursus vitae nullam. Enim eget at faucibus faucibus. Arcu aliquam
            tristique sit interdum rhoncus cursus felis adipiscing. Pharetra
            feugiat tempor adipiscing justo ipsum erat tristique. Habitasse dui
            turpis pulvinar non ornare. Elementum ullamcorper auctor malesuada
            et elementum sit consectetur commodo id. Ultrices nullam luctus
            eleifend arcu duis sit a amet nibh. Dui enim ut habitasse cursus a.
            Non malesuada in dignissim dui enim arcu adipiscing. Lorem ipsum
            dolor sit amet consectetur.
          </p>
          <a href="#read-more" className="read-more-link">
            Plant Manager Message Read Here →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ManagerSection;
