import React from 'react'
import './aboutUs.css'

function aboutUs() {
    return (
        <>
        <div className="aboutus__container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="video__div">
                            <div>
                                <img src="/Icons/Play.svg" alt="play" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutus__div">
                            <p className="aboutus__p">ABOUT US</p>
                            <p className="aboutus__head">We are a team of talented and passionate developers.
                            </p>
                            <p className="aboutus__det">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lorem ultrices faucibus odio dictum mi nibh sed. Eget commodo porttitor sit donec enim blandit. Risus enim at amet risus, fringilla massa, consectetur nec ultricies egestas nibh convallis.</p>
                            <p className="aboutus__det">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lorem ultrices faucibus odio dictum mi nibh sed. Eget commodo porttitor sit donec enim blandit.</p>
                            <div>
                                <button className="btn about__btn1">KNOW MORE</button>
                                <button className="btn about__btn2">OUR SERVICES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/illustrations/Blob.svg" className="aboutus__blob1" alt="blob" />
            <img src="/illustrations/Blob.svg" className="aboutus__blob2" alt="blob" />
            <img className="aboutus__dot__vector1" src="\Illustrations\Dot Vector.svg" alt="dot-vector"/>
            <img className="aboutus__dot__vector2" src="\Illustrations\Dot Vector.svg" alt="dot-vector"/>
        </div>
        </>
    )
}

export default aboutUs
