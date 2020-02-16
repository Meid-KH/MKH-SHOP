import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()}, Built with <strong>{`♥`}</strong>
          &nbsp;<a href="#"> MKH </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
