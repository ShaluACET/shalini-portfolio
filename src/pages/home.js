import React from "react";
import "../App.css"; // Ensure correct CSS import

// Skills Data
const skills = [
  { name: "HTML", percentage: 95, color: "#FFA500" },
  { name: "CSS", percentage: 90, color: "#FF5733" },
  { name: "JAVASCRIPT", percentage: 65, color: "#C70039" },
  { name: "MY SQL", percentage: 20, color: "#17A2B8" },
  { name: "REACT.JS", percentage: 90, color: "#FFD700" },
];

// Education Data
const education = [
  {
    degree: "Higher Secondary",
    institution: "GOVT GIRLS HR SEC SCHOOL",
    year: "2019 - 2023",
    description: "Specialized in Mathematics and Computer Science.",
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: "ACET ANNA UNIVERSITY",
    year: "2017 - 2019",
    description: "Completed with a focus on full-stack web development and data structures.",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Welcome Section */}
      <h1>SHALINI R</h1>
      <p>I'm a passionate developer creating a
        Amazing web Experiences.</p>

      {/* About Section */}
      <h2>FrontEnd Developer</h2>
      <p>
      I create responsive and visually engaging web experiences using
       modern frontend technologies like React, Javascript and Vue. My focus is on clean code, 
       seamless performance, and user-friendly design.
       Let’s build something amazing together! 🚀
      </p>

      {/* Education Section */}
      <div className="education-section">
        <h2>Education</h2>
        <div className="education-cards">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="education-year">{edu.year}</span>
              </div>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="tech">
      <h2>Technical Skills</h2>
      </div>
      <div className="skills-container">
        <h2>SKILLS FOR WEB DEVELOPMENT</h2>
        <div className="skills-content">
          <div className="skill-circle">
            <p>WebDesigning Language</p>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-bar" style={{ backgroundColor: skill.color }}>
                  <span>{skill.percentage}%</span>
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
