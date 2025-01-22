import React from "react";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section-container">
      <div className="news-flash">
        <div className="news-flash-header">
          <h2>News Flash</h2>
          <a href="/" className="see-all">
            See All News Flash →
          </a>
        </div>
        <ul className="news-list">
          {[
            {
              text: "Breaking news about an exciting event!",
            },
            {
              text: "Updates about upcoming events and activities.",
            },
            {
              text: "Important announcement for the community.",
            },
            {
              text: "Stay informed with the latest news.",
            },
            {
              text: "New initiatives launching soon.",
            },
          ].map((news, index) => (
            <li key={index} className="news-item">
              <p>{news.text}</p>
              <span className="new-badge">New</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="events">
        <div className="events-header">
          <h2>Events</h2>
          <a href="/" className="see-all">
            See All Events →
          </a>
        </div>
        <div className="events-grid">
          {[
            {
              image: "img1.jpg",
              name: "Independence Day Celebration",
              date: "15.08.2024",
            },
            {
              image: "img2.jpg",
              name: "Cultural Festival",
              date: "20.08.2024",
            },
            {
              image: "img3.avif",
              name: "Music Night",
              date: "25.08.2024",
            },
            {
              image: "img4.webp",
              name: "Art Exhibition",
              date: "30.08.2024",
            },
          ].map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt="Event" className="event-image" />
              <p className="event-name">{event.name}</p>
              <p className="event-date">{event.date} →</p>
            </div>
          ))}
        </div>
        <div className="events-navigation">
          <button className="nav-button">←</button>
          <button className="nav-button">→</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
