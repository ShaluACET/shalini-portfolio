import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.js";
import Projects from "./pages/Project.js";
import Contact from "./pages/contact.js";
import "./App.css";

function Blog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <nav className="navbar">
        <div className="logo">My Portfolio</div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Blog;
