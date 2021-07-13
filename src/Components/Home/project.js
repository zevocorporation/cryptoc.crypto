import React from "react";
import "./project.css";
import meros from "../../assets/meros.png";
import pivx from "../../assets/pivx.png";
import whirlwind from "../../assets/whirlwind.png";

function projectProcess() {
  return (
    <div id="advisoryprojects">
      <div className="container-fluid projects__conatiner">
        <p className="container__head__P">OUR ADVISORY PROJECTS</p>
        <div className="project__header">
          <div className="project__header__text">
            <p>Discover how we had helped world class companies in the past</p>
          </div>
          <div className="project__header__button">
            <button className="btn project__btn1">KNOW MORE ABOUT US</button>
            <a href="#contact" className="btn project__btn2">
              TALK WITH US
            </a>
          </div>
        </div>
        <div>
          <div className="project__card_container">
            <div className="row">
              <div className="col-lg-5">
                <img
                  className="project__card__image"
                  src="https://miro.medium.com/max/4000/1*X6dbq0CqifEShFyBumuEVA.png"
                  alt="/"
                />
              </div>
              <div className="col-lg-7 project__card__det">
                <div>
                  <p className="project__card__text">SENTINEL</p>
                  <p className="project__card__head">
                    How we devloped the worlds first Decentralized VPN app which
                    available for the general users.
                  </p>
                  <p className="project__card__p">
                    CryptoSI was an advisor on Sentinel since it’s inception and
                    has been a part of the various successes that the project
                    has achieved, our experience in the ICO market and Privacy
                    markets were essential in making sure the Sentinel team
                    continued to create and market a product that really
                    resonated with the security conscious and was also easy to
                    use.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project__card_container">
            <div className="row">
              <div className="col-lg-5">
                <img className="project__card__image" src={meros} alt="/" />
              </div>
              <div className="col-lg-7 project__card__det">
                <div>
                  <p className="project__card__text">MEROS</p>
                  <p className="project__card__head">
                    We have been supporting Meros as an advisor during its
                    initial development phase
                  </p>
                  <p className="project__card__p">
                    Meros is a truly remarkable labour of love and we have been
                    volunteering our services as advisors to this project for
                    years, it’s not always about money and with a project as
                    innovative as Meros we are prepared to support it simply
                    because it will push the industry forward
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project__card_container">
            <div className="row">
              <div className="col-lg-5">
                <img className="project__card__image" src={pivx} alt="/" />
              </div>
              <div className="col-lg-7 project__card__det">
                <div>
                  <p className="project__card__text">PIVX</p>
                  <p className="project__card__head">
                    We spent years as an integral part of the PIVX team
                  </p>
                  <p className="project__card__p">
                    Between 2016 and late 2020 CryptoSI was an integral member
                    of the PIVX team and put forward a great deal of proposals
                    which helped develop the first ever decentralised
                    partnership protocol and other things like a new GUI and
                    also a Godot module to integrate gaming with privacy. We
                    took PIVX to number 9 in the CryptoCharts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project__card_container">
            <div className="row">
              <div className="col-lg-5">
                <img className="project__card__image" src={whirlwind} alt="/" />
              </div>
              <div className="col-lg-7 project__card__det">
                <div>
                  <p className="project__card__text"> WHIRLWING CASH</p>
                  <p className="project__card__head">
                    We were an initial advisor to whirlwind Cash
                  </p>
                  <p className="project__card__p">
                    A new and exciting project based on the popular tornado
                    cash, We have been advising the Whirlwind.cash team based on
                    our experience within the privacy sector and have helped
                    bridge the gap between the their technically minded team and
                    investors who have been circling the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/illustrations/Blob.svg"
          className="projects__blob2"
          alt="blob"
        />
        <img
          className="projects__dot__vector1"
          src="\Illustrations\Dot Vector.svg"
          alt="dot-vector"
        />
        <img
          className="projects__dot__vector2"
          src="\Illustrations\Dot Vector.svg"
          alt="dot-vector"
        />
      </div>
    </div>
  );
}

export default projectProcess;
