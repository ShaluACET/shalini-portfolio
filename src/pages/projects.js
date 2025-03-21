import React from "react";
import "../App.css"; // Ensure this path is correct

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-card">
          <h2>Project 1</h2>
          <p>A brief description of your first project.</p>
        </div>
        <div className="project-card">
          <h2>Project 2</h2>
          <p>A brief description of your second project.</p>
        </div>
        <div className="project-card">
          <h2>Project 3</h2>
          <p>A brief description of your third project.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
