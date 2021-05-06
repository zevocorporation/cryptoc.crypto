import axios from "axios";
import React, { useEffect } from "react";
import "./smartReach.css";

function SmartReach() {
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid smart__reach__container" id="smartreach">
      <p className="smart__reach">SMART REACH</p>
      <div className="smart__reach__heading__container">
        <div className="smart__reach__heading">
          Discover the daily informative videos that we post
        </div>
        <div className="smart__reach__buttons">
          <button className="btn smart__reach__youtube">
            VISIT YOUTUBE <img src="/Icons/youtube-1.svg" alt="youtube" />
          </button>
          <button className="btn smart__reach__arrow">
            VIEW MORE <img src="/Icons/arrow-right.svg" alt="youtube" />
          </button>
        </div>
      </div>
      <div className="row smart__reach2">
        <div className="col-lg-6">
          <div className="smart__video__div">
            <div>
              <img src="/Icons/Play.svg" alt="play" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="smart__reach__div">
            <p className="smart__reach__head">
              Meros isn’t owned by any foundation or corporation, and no party
              has any special powers.
            </p>
            <p className="smart__reach__det">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              lorem ultrices faucibus odio dictum mi nibh sed. Eget commodo
              porttitor sit donec enim blandit. Risus enim at amet risus,
              fringilla massa, consectetur nec ultricies egestas nibh convallis.
            </p>
            <p className="smart__reach__similar__videos">SIMILAR VIDEOS </p>
            <div className="smart__reach__video__container">
              <div className="smart__reach__vids">
                <div className="smart__reach__svideo">
                  <img
                    className="smart__reach__svideo__play"
                    src="/Icons/Play.svg"
                    alt="alt"
                  />
                </div>
                <p className="smart__reach__svideo_Det">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
              <div className="smart__reach__vids">
                <div className="smart__reach__svideo">
                  <img
                    className="smart__reach__svideo__play"
                    src="/Icons/Play.svg"
                    alt="alt"
                  />
                </div>
                <p className="smart__reach__svideo_Det">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
              <div className="smart__reach__vids">
                <div className="smart__reach__svideo">
                  <img
                    className="smart__reach__svideo__play"
                    src="/Icons/Play.svg"
                    alt="alt"
                  />
                </div>
                <p className="smart__reach__svideo_Det">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartReach;
