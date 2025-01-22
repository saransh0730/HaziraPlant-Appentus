import React from "react";
import "../styles/HodSection.css";

function HodSection(){
  return (
    <div className="highlight-section">
      <h2 className="highlight-title">Head of Departments</h2>
      <div className="highlight-carousel">
        <div className="highlight-item">
          <img
            src="manager1.jpg"
            alt="Event 1"
            className="highlight-image"
          />
          <h3 className="highlight-item-title">Sectional Head Name</h3>
          <p className="highlight-item-description">
            Department name
          </p>
        </div>
        <div className="highlight-item">
          <img
            src="manager2.jpg"
            alt="Event 2"
            className="highlight-image"
          />
          <h3 className="highlight-item-title">Sectional Head Name</h3>
          <p className="highlight-item-description">
          Department name 
          </p>
        </div>
        <div className="highlight-item">
          <img
            src="manager3.jpg"
            alt="Event 3"
            className="highlight-image"
          />
          <h3 className="highlight-item-title">Sectional Head Name</h3>
          <p className="highlight-item-description">
          Department name 
          </p>
        </div>
        <div className="highlight-item">
          <img
            src="manager4.jpg"
            alt="Event 3"
            className="highlight-image"
          />
          <h3 className="highlight-item-title">Sectional Head Name</h3>
          <p className="highlight-item-description">
          Department name 
          </p>
        </div>
        <div className="highlight-item">
          <img
            src="manager5.jpg"
            alt="Event 3"
            className="highlight-image"
          />
          <h3 className="highlight-item-title">Sectional Head Name</h3>
          <p className="highlight-item-description">
          Department name 
          </p>
        </div>
      </div>
      <div className="highlight-controls">
        <button className="control-button">&#8592;</button>
        <button className="control-button">&#8594;</button>
      </div>
    </div>
  );
};

export default HodSection;
