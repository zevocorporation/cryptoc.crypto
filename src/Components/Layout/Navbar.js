import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="brand__logo__img"
              src="/Logo_Dark.png"
              alt=""
              width="30"
              height="24"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end homenavright"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active nav__links"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active nav__links"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active nav__links"
                  aria-current="page"
                  href="#advisoryprojects"
                >
                  Advisory Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active nav__links"
                  aria-current="page"
                  href="#smartreach"
                >
                  Smart Reach
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active nav__links"
                  aria-current="page"
                  href="#blogs"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-primary nav__button"
                  aria-current="page"
                  href="#contact"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img className="top__blob" src="/illustrations/Blob.svg" alt="blob" />
      </nav>
      <hr className="nav__line" />
    </>
  );
};

export default Navbar;
