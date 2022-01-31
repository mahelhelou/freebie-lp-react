import React from "react";
import Logo from "../../assets/img/Logo.png";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between pt-5 pb-5">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link rubik-font" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link rubik-font" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link rubik-font" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link rubik-font" href="#">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link rubik-font" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse flex-grow-0 pt-3 pt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item text-lg-left text-center">
              <a className="nav-link rubik-font fw-500" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item sing-up rounded-pill pl-4 pr-4 ml-2 text-lg-left text-center">
              <a className="nav-link rubik-font fw-500 " href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
