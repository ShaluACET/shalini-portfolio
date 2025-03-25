import React from "react";
import "../App.css"; // Ensure correct CSS import
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Let's connect! Feel free to reach out to me via email or phone.</p>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="contact-box">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-box">
          <h3>📧 Email</h3>
          <p>your.email@example.com</p>
        </div>

        <div className="contact-box">
          <h3>📍 Location</h3>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
