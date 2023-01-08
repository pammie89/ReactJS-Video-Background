import React from "react";
import videoBG from "../assets/video.mp4";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBG} autoPlay loop muted />
      <div className="content">
        <h1 className="slogan">Beauty is Merely a Flight Away!</h1>
        <div className="project-details">
          <h3 className="details">Video Background Overlay</h3>
          <p className="details-paragraph">
            In this project a video was placed as the pages background and an
            overlay with css was applied on top.
          </p>
          <p className="details-paragraph">
            <span className="details-bold">Built with React.js</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
