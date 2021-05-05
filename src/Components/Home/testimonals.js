import React from 'react'
import './testimonals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function testimonals() {

    let settings = {
        dots: true,
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
        <div class="testimonial__container">
            <p className="testimonial__text">TESTIMONIALS</p>
            <p className="testimonial__header">Don’t take our word for it.
                See what our clients say.</p>

            <div className="testimonial__slides">
                <Slider {...settings}>
                    <div className="testimonial__card">
                        <img className="slide__quotes" src="/Icons/left-quotes-sign (2) 1.svg" alt="quotes" />
                        <p className="testimonial__card__head">The best decentralized service provider in web</p>
                        <p className="testimonial__card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat bibendum eu nunc quis. Auctor imperdiet dolor odio eu lacus, nulla. Aliquet posuere sit placerat pellentesque ornare. Hendrerit pulvinar lobortis nulla suscipit auctor posuere.</p>
                        <div className="bottom__testimonal">
                            <div className="bottom__testimonal__left">
                                <img className="bottom__testimonal__left__image" src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                                <div className="bottom__testimonal__left__text">
                                    <span className="textimonial__pname">Mark Michel</span><br />
                                    <span className="textimonial__pdeg">HOD, Supply Chain</span>
                                </div>
                            </div>
                            <div className="bottom__testimonal__right">
                                <img src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658__340.png" class="bottom__testimonal__right__image" alt="right" />
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__card">
                        <img className="slide__quotes" src="/Icons/left-quotes-sign (2) 1.svg" alt="quotes" />
                        <p className="testimonial__card__head">The best decentralized service provider in web</p>
                        <p className="testimonial__card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat bibendum eu nunc quis. Auctor imperdiet dolor odio eu lacus, nulla. Aliquet posuere sit placerat pellentesque ornare. Hendrerit pulvinar lobortis nulla suscipit auctor posuere.</p>
                        <div className="bottom__testimonal">
                            <div className="bottom__testimonal__left">
                                <img className="bottom__testimonal__left__image" src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                                <div className="bottom__testimonal__left__text">
                                    <span className="textimonial__pname">Mark Michel</span><br />
                                    <span className="textimonial__pdeg">HOD, Supply Chain</span>
                                </div>
                            </div>
                            <div className="bottom__testimonal__right">
                                <img src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658__340.png" class="bottom__testimonal__right__image" alt="right" />
                            </div>
                        </div>
                    </div><div className="testimonial__card">
                        <img className="slide__quotes" src="/Icons/left-quotes-sign (2) 1.svg" alt="quotes" />
                        <p className="testimonial__card__head">The best decentralized service provider in web</p>
                        <p className="testimonial__card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat bibendum eu nunc quis. Auctor imperdiet dolor odio eu lacus, nulla. Aliquet posuere sit placerat pellentesque ornare. Hendrerit pulvinar lobortis nulla suscipit auctor posuere.</p>
                        <div className="bottom__testimonal">
                            <div className="bottom__testimonal__left">
                                <img className="bottom__testimonal__left__image" src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                                <div className="bottom__testimonal__left__text">
                                    <span className="textimonial__pname">Mark Michel</span><br />
                                    <span className="textimonial__pdeg">HOD, Supply Chain</span>
                                </div>
                            </div>
                            <div className="bottom__testimonal__right">
                                <img src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658__340.png" class="bottom__testimonal__right__image" alt="right" />
                            </div>
                        </div>
                    </div><div className="testimonial__card">
                        <img className="slide__quotes" src="/Icons/left-quotes-sign (2) 1.svg" alt="quotes" />
                        <p className="testimonial__card__head">The best decentralized service provider in web</p>
                        <p className="testimonial__card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat bibendum eu nunc quis. Auctor imperdiet dolor odio eu lacus, nulla. Aliquet posuere sit placerat pellentesque ornare. Hendrerit pulvinar lobortis nulla suscipit auctor posuere.</p>
                        <div className="bottom__testimonal">
                            <div className="bottom__testimonal__left">
                                <img className="bottom__testimonal__left__image" src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                                <div className="bottom__testimonal__left__text">
                                    <span className="textimonial__pname">Mark Michel</span><br />
                                    <span className="textimonial__pdeg">HOD, Supply Chain</span>
                                </div>
                            </div>
                            <div className="bottom__testimonal__right">
                                <img src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658__340.png" class="bottom__testimonal__right__image" alt="right" />
                            </div>
                        </div>
                    </div><div className="testimonial__card">
                        <img className="slide__quotes" src="/Icons/left-quotes-sign (2) 1.svg" alt="quotes" />
                        <p className="testimonial__card__head">The best decentralized service provider in web</p>
                        <p className="testimonial__card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat bibendum eu nunc quis. Auctor imperdiet dolor odio eu lacus, nulla. Aliquet posuere sit placerat pellentesque ornare. Hendrerit pulvinar lobortis nulla suscipit auctor posuere.</p>
                        <div className="bottom__testimonal">
                            <div className="bottom__testimonal__left">
                                <img className="bottom__testimonal__left__image" src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                                <div className="bottom__testimonal__left__text">
                                    <span className="textimonial__pname">Mark Michel</span><br />
                                    <span className="textimonial__pdeg">HOD, Supply Chain</span>
                                </div>
                            </div>
                            <div className="bottom__testimonal__right">
                                <img src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658__340.png" class="bottom__testimonal__right__image" alt="right" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default testimonals
