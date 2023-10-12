import React from "react";
import "./contact.scss";
import Title from "../title/title";

/**
 * Displaying the contact details of the company
 */
const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <Title title="Contact us" />
      <div className="container-fluid">
        <div className="row">
          <div className="left-container col-sm-12  col-md-8 col-lg-8">
            <h2>Have a project in mind? Let's make it happen</h2>

            <div className="links-container">
              <ul>
                <li>
                  <a href="/">Terms of service</a>
                </li>
                <li>
                  <a href="/">Privacy policy</a>
                </li>
                <li>
                  <a href="/">Impressium</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Github</a>
                </li>
                <li>
                  <a href="/">Linkedin</a>
                </li>
                <li>
                  <a href="/">Teams</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Youtube</a>
                </li>
                <li>
                  <a href="/">Behance</a>
                </li>
                <li>
                  <a href="/">Dribbble</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="right-container col-sm-12  col-md-4 col-lg-4">
            <address>
              22 Street Name, Suburb, 8000,
              <br />
              Cape Town, South Africa
              <br />
              +27 21 431 0001
              <br />
              <a href="/">enquirie@website.co.za</a>
            </address>

            <h6>Explore open jobs</h6>
            <p>&copy;2000—2023 Company Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
