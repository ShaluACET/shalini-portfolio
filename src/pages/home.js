import React from "react";
import "../App.css"; // Ensure correct CSS import

const skills = [
  { name: "HTML", percentage: 95, color: "#FFA500" },
  { name: "CSS", percentage: 90, color: "#FF5733" },
  { name: "JAVASCRIPT", percentage: 65, color: "#C70039" },
  { name: "MY SQL", percentage: 20, color: "#17A2B8" },
  { name: "REACT.JS", percentage: 90, color: "#FFD700" },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Welcome Section */}
      <h1>SHALINI R</h1>
      <p>I'm a passionate developer creating amazing web experiences.</p>
      <h2>FrontEnd Developer</h2>
        <p>
          Foolish Developer is a blog website where you will find great tutorials
          on web design and development. Here each tutorial is beautifully
          described step by step with the required source code.
        </p>

      {/* Technical Skills Section */}
      {/* <h2>Technical Skills</h2> */}
      <div className="skills-container">
        <h2>SKILLS FOR WEB DEVELOPMENT</h2>
        <div className="skills-content">
          <div className="skill-circle">
            <p>Web Designer</p>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div
                  className="skill-bar"
                  style={{ backgroundColor: skill.color }}
                >
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
