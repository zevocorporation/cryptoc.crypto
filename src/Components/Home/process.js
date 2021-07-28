import React from "react";
import "./process.css";

//IMPORTING MEDIA ASSETS

import ideaScoping from "../../assets/Icons/Idea Scoping.svg";
import roadmap from "../../assets/Icons/Roadmap planning.svg";
import development from "../../assets/Icons/Development _ Execution.svg";
import launch from "../../assets/Icons/Launch _ Maintenance.svg";

function process() {
  return (
    <div>
      <div className="container-fluid process__container">
        <p className="process__title">OUR PROCESS</p>
        <div className="process__head__container">
          <p className="process__head">
            We have a simple, yet robust and effective process
          </p>
          <p className="process__p">
            CryptoSI do not bog you down with jargon, yet we are a highly
            technical team capable of communicating complex situations in
            understanable language
          </p>
        </div>
        <div className="row process__card__container">
          <div className="col-lg-6">
            <div className="row process__card">
              <div className="col-md-2">
                <img
                  className="process__card__image"
                  src={ideaScoping}
                  alt="card-img"
                />
              </div>
              <div className="col-md-10">
                <p className="process__card__titile">1. Idea Scoping</p>
                <p className="process__card__det">
                  CryptoSI is an ideas company, we can analyse your idea for
                  feasibility and set out realistic pricing and resources
                  required, we also have in house compliance expert Dean
                  Benjamin on hand to iron out potential legal issues.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row process__card">
              <div className="col-md-2">
                <img
                  className="process__card__image"
                  src={roadmap}
                  alt="card-img"
                />
              </div>
              <div className="col-md-10">
                <p className="process__card__titile">2. Roadmap Planning</p>
                <p className="process__card__det">
                  An accurate and attainable roadmap is the cornerstone of a
                  well managed project, we will make sure your roadmap is
                  exciting for your stakeholders and not daunting to your
                  development team, realistic goals only.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row process__card">
              <div className="col-md-2">
                <img
                  className="process__card__image"
                  src={development}
                  alt="card-img"
                />
              </div>
              <div className="col-md-10">
                <p className="process__card__titile">
                  3. Development & Execution
                </p>
                <p className="process__card__det">
                  We pride ourselves on extensive testing and bug hunting,
                  making sure we deliver you a polished product within the
                  allotted time frame is what we do best.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row process__card">
              <div className="col-md-2">
                <img
                  className="process__card__image"
                  src={launch}
                  alt="card-img"
                />
              </div>
              <div className="col-md-10">
                <p className="process__card__titile">4. Launch & Maintenance</p>
                <p className="process__card__det">
                  CryptoSI will not leave you holding a piece of software that
                  neither you nor your staff know what to do with, we will
                  provide documentation, support and maintenance for an agreed
                  upon period after launch.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="process__dot__vector1"
          src="\Illustrations\Dot Vector.svg"
          alt="dot-vector"
        />
        <img
          src="/illustrations/Blob.svg"
          className="process__blob2"
          alt="blob"
        />
      </div>
    </div>
  );
}

export default process;
