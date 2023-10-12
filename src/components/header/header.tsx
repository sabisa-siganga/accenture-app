import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import NavContent from "./nav-content";

/**
 * Displaying the header
 */
const Header = () => {
  const [collapseNav, setCollapseNav] = useState(true);

  /**
   * toggling collapseNav state
   */
  const toggleMobileNavBar = () => {
    setCollapseNav((currentState) => {
      return !currentState;
    });
  };

  return (
    <>
      <div className="header-container">
        <div className="header">
          <img src={logo} alt="logo" />

          {/* navbar links */}
          <NavContent />

          {/*mobile navbar button  */}
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMobileNavBar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* show mobile navbar when collapseNav is false */}
        <div className={`navbar-collapse ${collapseNav ? "" : "show-navbar"}`}>
          <NavContent />
        </div>
      </div>
      <div className="header-placeholder" />
    </>
  );
};

export default Header;
