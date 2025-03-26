import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.js";
// import About from "./pages/about.js";
import Projects from "./pages/Project.js";
import Contact from "./pages/contact.js";
import "./App.css";

function Blog() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">My Portfolio</div>
        <div className="buttons">
          <Link to="/">Home</Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
    </Router>
  );
}

export default Blog;