import React from 'react'
import './services.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function services() {



    let settings = {
        dots:false,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return (
        <div className="services__container">
            <div className="services__head">
                <p className="service__name">OUR SERVICES</p>
                <p className="services__head">We are development experts on all technologies & platforms.</p>
            </div>
            <div className="slider__services">
                <Slider {...settings}>
                    <div className="service__slide__card">
                        <img className="service__slide__img" src="/Icons/Front End.svg" alt="dev" />
                        <p className="service__slide__head">Front-End Development</p>
                        <p className="service__slide__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinar proin viverra ullamcorper ac, eget.</p>
                    </div>
                    <div className="service__slide__card">
                        <img className="service__slide__img" src="/Icons/Back end.svg" alt="dev" />
                        <p className="service__slide__head">Front-End Development</p>
                        <p className="service__slide__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinar proin viverra ullamcorper ac, eget.</p>
                    </div>
                    <div className="service__slide__card">
                        <img className="service__slide__img" src="/Icons/Bot Development.svg" alt="dev" />
                        <p className="service__slide__head">Front-End Development</p>
                        <p className="service__slide__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinar proin viverra ullamcorper ac, eget.</p>
                    </div>
                    <div className="service__slide__card">
                        <img className="service__slide__img" src="/Icons/Application Development.svg" alt="dev" />
                        <p className="service__slide__head">Front-End Development</p>
                        <p className="service__slide__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinar proin viverra ullamcorper ac, eget.</p>
                    </div>
                </Slider>
            </div>
            <img src="/illustrations/Blob.svg" className="services__blob2" alt="blob" />
        </div>
    )
}

export default services
