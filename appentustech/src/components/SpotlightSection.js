import React from "react";
import "../styles/SpotlightSection.css";

function SpotlightSection(){
  return (
    <div className="spotlight-section">
      <h2 className="spotlight-title">Spotlight</h2>
      <div className="spotlight-carousel">
        <div className="spotlight-item">
          <img
            src="fort.jpeg"
            alt="Event 1"
            className="spotlight-image"
          />
          <h3 className="spotlight-item-title">Spotlight Event Name and Details</h3>
          <p className="spotlight-item-description">
            Lorem ipsum dolor sit amet consectetur <span>&rarr;</span>
          </p>
        </div>
        <div className="spotlight-item">
          <img
            src="mel.webp"
            alt="Event 2"
            className="spotlight-image"
          />
          <h3 className="spotlight-item-title">Spotlight Event Name and Details</h3>
          <p className="spotlight-item-description">
            Lorem ipsum dolor sit amet consectetur <span>&rarr;</span>
          </p>
        </div>
        <div className="spotlight-item">
          <img
            src="fes.jpg"
            alt="Event 3"
            className="spotlight-image"
          />
          <h3 className="spotlight-item-title">Spotlight Event Name and Details</h3>
          <p className="spotlight-item-description">
            Lorem ipsum dolor sit amet consectetur <span>&rarr;</span>
          </p>
        </div>
      </div>
      <div className="spotlight-controls">
        <button className="control-btn">&#8592;</button>
        <button className="control-btn">&#8594;</button>
      </div>
    </div>
  );
};

export default SpotlightSection;
