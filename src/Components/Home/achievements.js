import React from "react";
import "./achievements.css";

function achievements() {
  return (
    <div className="main__achievents">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 acheve__text">
            <p className="acheive__din">OUR ACHIEVEMENT IN NUMBERS</p>
            <p className="acheive__main">Experience you can count on</p>
            <p className="acheive__p">
              CryptoSI have worked with dozens of projects on Podcasts,
              advertising, codebase support and many other areas of crypto. We
              have experienced numerous bull and bear markets and always
              aaproach every project with the care and attention it deserves.
            </p>
          </div>
          <div className="col-lg-7 achieve__data__container">
            <div className="acheive__data">
              <span className="achieve__numbers">
                84<span className="achieve__plus">+</span>
              </span>
              <span className="achieve__number__info">Podcast episodes</span>
            </div>
            <div className="acheive__data">
              <span className="achieve__numbers">
                10<span className="achieve__plus">+</span>
              </span>
              <span className="achieve__number__info">Projects Completed</span>
            </div>
            <div className="acheive__data">
              <span className="achieve__numbers">
                8<span className="achieve__plus">+</span>
              </span>
              <span className="achieve__number__info">Years of Journey</span>
            </div>
            <div className="acheive__data">
              <span className="achieve__numbers">
                30<span className="achieve__plus">+</span>
              </span>
              <span className="achieve__number__info">
                Projects collabrated
              </span>
            </div>
            {/* <div className="acheive__data">
              <span className="achieve__numbers">
                20<span className="achieve__plus">+</span>
              </span>
              <span className="achieve__number__info">Awards Won</span>
            </div>
            <div className="acheive__data">
              <span className="achieve__numbers">
                5<span className="achieve__plus">+</span>
              </span>
              <span className="achieve__number__info">Service Geographics</span>
            </div> */}
          </div>
        </div>
      </div>
      <img
        className="achievemets__dot__vector2"
        src="\Illustrations\Dot Vector.svg"
        alt="dot-vector"
      />
      <img
        src="/illustrations/Blob.svg"
        className="achievemets__blob1"
        alt="blob"
      />
    </div>
  );
}

export default achievements;
