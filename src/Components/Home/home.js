import React from 'react'
import AboutUs from './aboutUs'
import Achievements from './achievements'
import Project from './project'
import Process from './process'
import SmartReach from './smartReach'
import Blogs from './blogs'
import ContactUs from './contactUs'
import Services from './services'
import Testimonals from './testimonals'

import './home.css'

export default function home() {
    return (
        <div>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lorem ultrices faucibus odio dictum mi nibh sed. Eget commodo porttitor sit donec enim blandit. Risus enim at amet risus, fringilla massa, consectetur nec ultricies egestas nibh convallis.
                    </span>
                </div>
                <img className="main__dot__vector" src="\Illustrations\Dot Vector.svg" alt="dot-vector"/>
                <div className="main__button__container">
                    <button className="btn talk__button">TALK WITH US</button>
                    <button className="btn services__button">OUR SERVICES</button>
                </div>
                <img className="main__hero__illustration" src="Illustrations\Hero Illustration.svg" alt="hero" />
            </div>
            <AboutUs/>
            <Achievements/>
            <Services />
            <Process />
            <Project/>
            <SmartReach />
            <Blogs />
            <Testimonals/>
            <ContactUs/>
        </div>
    )
}
