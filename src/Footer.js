import React from "react";
import "./App.css"; // Ensure styles are applied

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Shalini Blog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
