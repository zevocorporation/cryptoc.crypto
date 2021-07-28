import React from "react";
import "./contactUs.css";

//IMPORTING MEDIA ASSETS

import applicationDevelopment from "../../assets/Icons/Application Development.svg";
import botDevelopment from "../../assets/Icons/Bot Development.svg";
import frontEnd from "../../assets/Icons/Front End.svg";
import backEnd from "../../assets/Icons/Back end.svg";
import mail from "../../assets/Icons/Mail.svg";
import phone from "../../assets/Icons/Phone.svg";

function contactUs() {
  return (
    <div id="contact">
      <div className="contact__head">
        <p className="contact__heading">CONTACT US</p>
        <p className="conatact__h">Let’s work together</p>
        <p className="contact__det">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut
          faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus
          lorem.{" "}
        </p>
        <div className="contact__en">
          <span className="constct_details">
            <img className="contact__img" src={mail} alt="" />
            contact@cryptocryptosi.com
          </span>
          <span className="constct_details">
            <img className="contact__img" src={phone} alt="" />
            +22 2231654789
          </span>
        </div>

        <div className="form__card">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <p className="contact__p">Name</p>
                <input
                  className="contact__input"
                  placeholder="enter your name"
                />
              </div>
              <div className="col-md-6">
                <p className="contact__p">Email Address</p>
                <input
                  className="contact__input"
                  placeholder="enter your email address"
                />
              </div>
              <div className="col-md-6">
                <p className="contact__p">Organization</p>
                <input
                  className="contact__input"
                  placeholder="enter your organization name"
                />
              </div>
              <div className="col-md-6">
                <p className="contact__p">Budget</p>
                <select className="contact__input">
                  <option>Whats your budget</option>
                </select>
              </div>
            </div>
            <div className="row">
              <p className="contact__p">Services you are interested on:</p>
              <div className="col-md-6">
                <div className="conarct__card">
                  <div className="contact__innerdiv">
                    <img className="contact__img" src={frontEnd} alt="dev" />
                    <span className="contact__card__text">
                      Front End Development
                    </span>
                  </div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="conarct__card">
                  <div className="contact__innerdiv">
                    <img className="contact__img" src={backEnd} alt="dev" />
                    <span className="contact__card__text">
                      Back End Development
                    </span>
                  </div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="conarct__card">
                  <div className="contact__innerdiv">
                    <img
                      className="contact__img"
                      src={botDevelopment}
                      alt="dev"
                    />
                    <span className="contact__card__text">Bot Development</span>
                  </div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="conarct__card">
                  <div className="contact__innerdiv">
                    <img
                      className="contact__img"
                      src={applicationDevelopment}
                      alt="dev"
                    />
                    <div className="contact__card__text">
                      Application Development
                    </div>
                  </div>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <p className="contact__p">Message</p>
            <textarea
              className="contact__text__area"
              defaultValue="Enter your message"
            ></textarea>
            <div className="row">
              <button className="contRact__button">REQUEST QUOTE</button>
            </div>
          </div>
        </div>
        <div className="contact__down__color"></div>
      </div>
    </div>
  );
}

export default contactUs;
