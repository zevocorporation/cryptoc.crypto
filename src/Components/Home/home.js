import React from "react";
import AboutUs from "./aboutUs";
import Achievements from "./achievements";
import Project from "./project";
import Process from "./process";
import SmartReach from "./smartReach";
import Blogs from "./blogs";
import ContactUs from "./contactUs";
import Services from "./services";
import Testimonals from "./testimonals";

import "./home.css";

export default function home() {
  return (
    <div id="home">
      <div className="think__innovate__build">
        <span className="think">Think</span>
        <span className="innovate">Innovate</span>
        <span className="build">Build</span>
      </div>
      <div className="main__text__container">
        <h1 className="main__text">
          Reinventing businesses through Crypto <br />
          Transformation solutions
        </h1>
        <div className="main__subtext__container">
          <span className="main__subtext">
            Crypto S.I is a world renowned software development company
            specialising in crypto-currency. We haves decades worth of
            experience in Crypto currency, both inside the code and outside in
            the communities. Crypto S.I has been in the Bitcoin space since
            2012.
          </span>
        </div>
        <img
          className="main__dot__vector"
          src="\Illustrations\Dot Vector.svg"
          alt="dot-vector"
        />
        <div className="main__button__container">
          <a href="#contact" className="btn talk__button">
            TALK WITH US
          </a>
          <a href="#services" className="btn services__button">
            OUR SERVICES
          </a>
        </div>
        <img
          className="main__hero__illustration"
          src="Illustrations\Hero Illustration.svg"
          alt="hero"
        />
      </div>
      <AboutUs />
      <Achievements />
      <Services />
      <Process />
      <Project />
      <SmartReach />
      <Blogs />
      <Testimonals />
      <ContactUs />
    </div>
  );
}
