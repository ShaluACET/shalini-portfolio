
import React from "react";
import { motion } from "framer-motion";
import "../App.css"; // Ensure the CSS file is correctly linked

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern and responsive personal portfolio website.",
    // image: "https://source.unsplash.com/400x300/?technology,website",
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce platform with Stripe payment integration.",
    //image: "https://source.unsplash.com/400x300/?technology,ecommerce",
    link: "#",
  },
  {
    title: "AI Chatbot",
    description: "A chatbot powered by GPT for automated customer support.",
    //image: "https://source.unsplash.com/400x300/?technology,ai",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h1>

      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="project-btn">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
