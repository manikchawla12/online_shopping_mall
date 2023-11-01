import "./top_crousel.css";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

import React from "react";

export const Top_crousel = () => {
  const Navigate = useNavigate();
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          // url={`${process.env.PUBLIC_URL}/assets/videos/video-3.mp4`}
          url="https://res.cloudinary.com/dhhyhtkc9/video/upload/v1697451603/videoplayback_1_online-video-cutter.com__merged_rgpnwg.mp4"
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="hero-text">
        <h1>You’ll find it here!</h1>
        <h2>"Discover Your Style here – Where Shopping Meets Fun!"</h2>
      </div>

      <button
        onClick={() => Navigate("/product")}
        className="shop-now-btn"
      >
        Shop Now
      </button>
    </div>
  );
};
