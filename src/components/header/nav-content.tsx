import React from "react";
import "./header.scss";

const NavContent = () => {
  return (
    <>
      <nav className="navigation">
        <a href="#services">Services</a>
        <a href="#industries">Industries</a>
        <a href="#cases">Cases</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="lets-talk">Let's Talk</button>
    </>
  );
};

export default NavContent;
