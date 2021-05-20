import React from "react";
import "./services.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function services() {
  let settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="services__container" id="services">
      <div className="services__head">
        <p className="service__name">OUR SERVICES</p>
        <p className="services__head">
          We are development experts on all technologies & platforms.
        </p>
      </div>
      <div className="slider__services">
        <Slider {...settings}>
          <div className="service__slide__card">
            <img
              className="service__slide__img"
              src="/Icons/Front End.svg"
              alt="dev"
            />
            <p className="service__slide__head">Front-End Development</p>
            <p className="service__slide__text">
              Through our extensive network of freelancers we can always find
              the right person for your needs as well as being able to
              completely design (including UX) and implement front ends in house
              in a variety of frameworks.
            </p>
          </div>
          <div className="service__slide__card">
            <img
              className="service__slide__img"
              src="/Icons/Back end.svg"
              alt="dev"
            />
            <p className="service__slide__head">Back-End Development</p>
            <p className="service__slide__text">
              Our developers are experienced in Solidity, C++ and Python and
              will certainly be able to implement your specs to the highest
              quality, indeed if you only have an idea we have technical writers
              available that can spec out your idea and provide cost effective
              feasibility analysis before a line of code is written.
            </p>
          </div>
          <div className="service__slide__card">
            <img
              className="service__slide__img"
              src="/Icons/Bot Development.svg"
              alt="dev"
            />
            <p className="service__slide__head">Podcasts and Tutorials </p>
            <p className="service__slide__text">
              Through our Smartreach youtube channel we can have professionally
              presented and edited podcasts around your project as a one-off or
              regular occurrence. We can also create a single or suite of
              tutorials for your project.
            </p>
          </div>
          <div className="service__slide__card">
            <img
              className="service__slide__img"
              src="/Icons/Application Development.svg"
              alt="dev"
            />
            <p className="service__slide__head"> Advisory Services</p>
            <p className="service__slide__text">
              we have been involved in some of Crypto’s biggest underdog
              stories, such as PIVX and Sentinel, we really have experience in
              this industry and are ready to help you see the FUD from the
              trees.
            </p>
          </div>
        </Slider>
      </div>
      <img
        src="/illustrations/Blob.svg"
        className="services__blob2"
        alt="blob"
      />
    </div>
  );
}

export default services;
