import React from "react";
import "../styles/MultipleSections.css"; 
import { FaBirthdayCake, FaPlay } from "react-icons/fa";
import { FcStackOfPhotos } from "react-icons/fc";
import { PiMusicNotesFill } from "react-icons/pi";
import { FaVest } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { FaFileAlt } from "react-icons/fa";


function MultipleSections() {
  const birthdays = [
    {
      name: "Birthday Person Name",
      date: "25 Oct",
      department: "Department name",
    },
    {
      name: "Birthday Person Name",
      date: "25 Oct",
      department: "Department name",
    },
    {
      name: "Birthday Person Name",
      date: "25 Oct",
      department: "Department name",
    },
    {
      name: "Birthday Person Name",
      date: "25 Oct",
      department: "Department name",
    },
  ];

  const duties = [
    { day: "Today", name: "Sh. Ankit Agrawal, EE (M)" },
    { day: "Tomorrow", name: "Sh. Ankit Agrawal, EE (M)" },
    { day: "28/10/2024", name: "Sh. Ankit Agrawal, EE (M)" },
  ];

  return (
    <div className="dashboard-container">
      <div className="card birthday-section">
        <div className="card-header">
          <span className="badge upcoming">
            <FaBirthdayCake size={15} />
            Upcoming
          </span>
          <h3>Happy Birthday</h3>
        </div>
        <ul className="birthday-list">
          {birthdays.map((birthday, index) => (
            <li key={index} className="birthday-item">
              <img src="manager1.jpg" alt="Person" className="birthday-image" />
              <div className="birthday-info">
                <h4>{birthday.name}</h4>
                <p>{birthday.department}</p>
              </div>
              <div className="birthday-date">{birthday.date}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="card hazira-section">
        <div className="card-header">
          <h3>Hazira Plant at a Glance</h3>
          <span className="badge glance">
            <FcStackOfPhotos size={17} />
            Glance
          </span>
        </div>
        <div className="card-content">
          <img src="hazira.jpg" alt="Hazira Plant" className="card-image" />
          <button className="card-button"><FaPlay size={12} />Play Video</button>
        </div>
      </div>

      <div className="card ongc-song">
        <div className="card-header">
          <h3>ONGC Song</h3>
          <span className="badge theme">
            <PiMusicNotesFill size={15} />
            Theme
          </span>
        </div>
        <div className="card-content">
          <img src="ongc.jpg" alt="ONGC Song" className="card-image" />
          <button className="card-button"><FaPlay size={12} />Play Song</button>
        </div>
      </div>

      <div className="card safety-rules">
        <div className="card-header">
          <h3>Safety Rules</h3>
          <span className="badge employees">
            <FaVest size={15} />
            Employees
          </span>
        </div>
        <div className="card-content">
          <img
            src="247_employee-welfare2.jpg"
            alt="Safety Rules"
            className="card-image"
          />
          <button className="card-button"><FaPlay size={12} />Play Safety Rules</button>
        </div>
      </div>

      <div className="card todays-thought">
        <div className="card-header">
          <h3>आज का विचार</h3>
          <span className="badge thought">
            <TfiThought size={15} />
            Thoughts
          </span>
        </div>
        <div className="card-content">
          <img src="suv.png" alt="Thought of the Day" className="card-image" />
        </div>
      </div>

      <div className="card todays-word">
        <div className="card-header">
          <h3>आज का विचार</h3>
          <span className="badge word">
            <FaFileAlt size={15} />
            Word
          </span>
        </div>
        <div className="card-content">
          <img src="word.jpg" alt="Thought of the Day" className="card-image" />
        </div>
      </div>

      <div className="card duty-day">
        <h3>Duty of Day</h3>
        <ul className="duty-list">
          {duties.map((duty, index) => (
            <li key={index} className="duty-item">
              <p>
                <strong>{duty.day}</strong>: {duty.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultipleSections;
