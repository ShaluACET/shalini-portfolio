
import React from "react";
import { motion } from "framer-motion";
import "../App.css"; // Ensure the CSS file is correctly linked

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern and responsive personal portfolio website.",
    image: "https://images.websitebuilderexpert.com/wp-content/uploads/2017/11/Best-Portfolio-Website-Builders.jpg",
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce platform with Stripe payment integration.",
    image: "https://static.vecteezy.com/system/resources/previews/035/198/647/non_2x/ai-generated-online-shopping-representation-with-people-on-digital-devices-surrounded-by-gifts-and-icons-of-products-photo.jpg",
    link: "#",
  },
  {
    title: "AI Chatbot",
    description: "A chatbot powered by GPT for automated customer support.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUChmNmMxjj7wkx7__f3QmH1swX5Gd-MDKQ&s",
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
