import React from 'react'
import './achievements.css'

function achievements() {
    return (
        <div className="main__achievents">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 acheve__text">
                        <p className="acheive__din">OUR ACHIEVEMENT IN NUMBERS</p>
                        <p className="acheive__main">Experience you can count on</p>
                        <p className="acheive__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lorem ultrices faucibus odio dictum mi nibh sed. Eget commodo porttitor sit donec enim blandit. Risus enim at amet risus, fringilla massa, consectetur nec ultricies egestas nibh convallis.</p>
                        <button className="achievements__button">GET A QUOTE FROM US</button>
                    </div>
                    <div className="col-lg-7 achieve__data__container">
                        <div className="acheive__data">
                            <span className="achieve__numbers">60<span className="achieve__plus">+</span></span>
                            <span className="achieve__number__info">Happy Clients</span>
                        </div>
                        <div className="acheive__data">
                            <span className="achieve__numbers">150<span className="achieve__plus">+</span></span>
                            <span className="achieve__number__info">Projects Completed</span>
                        </div>
                        <div className="acheive__data">
                            <span className="achieve__numbers">8<span className="achieve__plus">+</span></span>
                            <span className="achieve__number__info">Years of Journey</span>
                        </div>
                        <div className="acheive__data">
                            <span className="achieve__numbers">100<span className="achieve__plus">+</span></span>
                            <span className="achieve__number__info">Dedicated Members</span>
                        </div>
                        <div className="acheive__data">
                            <span className="achieve__numbers">20<span className="achieve__plus">+</span></span>
                            <span className="achieve__number__info">Awards Won</span>
                        </div>
                        <div className="acheive__data">
                            <span className="achieve__numbers">5<span className="achieve__plus">+</span></span>
                            <span className="achieve__number__info">Service Geographics</span>
                        </div>
                    </div>
                </div>
            </div>
            <img className="achievemets__dot__vector2" src="\Illustrations\Dot Vector.svg" alt="dot-vector"/>
            <img src="/illustrations/Blob.svg" className="achievemets__blob1" alt="blob" />
        </div>
    )
}

export default achievements
