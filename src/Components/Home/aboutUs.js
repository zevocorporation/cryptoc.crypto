import React from "react";
import ReactPlayer from "react-player";
import "./aboutUs.css";

function aboutUs() {
  return (
    <>
      <div className="aboutus__container" id="about">
        <div className="whole__about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="video__div">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=JjWqofZp4lk&t=1s"
                    className="aboutus_video"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aboutus__div">
                  <p className="aboutus__p">ABOUT US</p>
                  <p className="aboutus__head">
                    We are a team of talented and passionate developers.
                  </p>
                  <p className="aboutus__det">
                    Crypto S.I is a world renowned software development company
                    specialising in crypto-currency.
                  </p>
                  <p className="aboutus__det">
                    We haves decades worth of experience in Crypto currency,
                    both inside the code and outside in the communities. Crypto
                    S.I has been in the Bitcoin space since 2012.
                  </p>
                  <div>
                    <button
                      onClick={() => console.log("button click")}
                      className="btn about__btn1"
                    >
                      KNOW MORE
                    </button>
                    <a href="#services" className="btn about__btn2">
                      OUR SERVICES
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/illustrations/Blob.svg"
            className="aboutus__blob2"
            alt="blob"
          />
          <img
            className="aboutus__dot__vector1"
            src="\Illustrations\Dot Vector.svg"
            alt="dot-vector"
          />
          <img
            className="aboutus__dot__vector2"
            src="\Illustrations\Dot Vector.svg"
            alt="dot-vector"
          />
        </div>
      </div>
    </>
  );
}

export default aboutUs;
