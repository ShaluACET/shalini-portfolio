import React from "react";
import "../App.css"; // Ensure this path is correct

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out via email or social media.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
