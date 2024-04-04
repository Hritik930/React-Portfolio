import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar " data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_bar ">
        <h1 className="logo1">Port</h1><h2 className="logo2">Folio</h2>
        </div>
        <div className="right">
          <a href="#home" className="nav_items">Home</a>
          <a href="#experience" className="nav_items">Experience</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Project</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
