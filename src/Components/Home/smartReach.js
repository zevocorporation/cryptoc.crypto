import axios from "axios";
import React, { useEffect, useState } from "react";
import "./smartReach.css";
import ReactPlayer from "react-player";

function SmartReach() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCcOzf3f6ZWVlIu-6qQpjudA"
      )
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid smart__reach__container" id="smartreach">
      <p className="smart__reach">SMART REACH</p>
      <div className="smart__reach__heading__container">
        <div className="smart__reach__heading">
          Discover the regular informative videos that we post
        </div>
        <div className="smart__reach__buttons">
          <a
            href="https://www.youtube.com/channel/UCcOzf3f6ZWVlIu-6qQpjudA"
            target="_blank"
            rel="reopener noreferrer"
            className="btn smart__reach__youtube"
          >
            VISIT YOUTUBE <img src="/Icons/youtube-1.svg" alt="youtube" />
          </a>
          {/* <button className="btn smart__reach__arrow">
            VIEW MORE <img src="/Icons/arrow-right.svg" alt="youtube" />
          </button> */}
        </div>
      </div>
      <div className="row smart__reach2">
        <div className="col-lg-6">
          <div className="smart__video__div">
            {data?.slice(0, 1)?.map((vid, index) => {
              return <ReactPlayer key={index} url={vid.link} />;
            })}
            {/* <div>
              <img src="/Icons/Play.svg" alt="play" />
            </div> */}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="smart__reach__div">
            {data?.slice(0, 1)?.map((vid, index) => {
              return (
                <p className="smart__reach__head" key={index}>
                  {vid.title}
                </p>
              );
            })}

            <p className="smart__reach__det">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              lorem ultrices faucibus odio dictum mi nibh sed. Eget commodo
              porttitor sit donec enim blandit. Risus enim at amet risus,
              fringilla massa, consectetur nec ultricies egestas nibh convallis.
            </p>
            <div className="smart__reach__video__container">
              {data?.slice(1, 4)?.map((vid, index) => {
                return (
                  <div className="smart__reach__vids" key={index}>
                    <div className="smart__reach__svideo">
                      <ReactPlayer url={vid.link} className="react_player" />
                      {/* <img
                        className="smart__reach__svideo__play"
                        src="/Icons/Play.svg"
                        alt="alt"
                      /> */}
                    </div>
                    <p className="smart__reach__svideo_Det">{vid.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartReach;
