import React from "react";
import ReactPlayer from "react-player";
import "./mid_home_card.css";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

export const Mid_home_cards = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="video-container">
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <img
            onClick={() => navigate("/product-details/26")}
            // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-1.mp4`}
           src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
            width="100%"
            height="119.9%"
            style={{ "border-radius": "25px"}}
          />

          <h3>Aether Ultra Pro</h3>
          <span className="notch"></span>
        </Tilt>{" "}
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <img
            onClick={() => navigate("/product-details/39")}
            // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-2.mp4`}
            src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=600"
            width="100%"
            height="112.65%"
            style={{ "border-radius": "25px"}}
          />

          <h3>Clothes</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <img
            onClick={() => navigate("/product-details/50")}
            src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=600"
            width="100%"
            margin="0px"
            padding="0px"
            height="119.9%"
            style={{ "border-radius": "25px"}}
          />

          <h3>Accessories</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          
          <img
            onClick={() => navigate("/product-details/76")}
            // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-4.mp4`}
           src="https://images.pexels.com/photos/718981/pexels-photo-718981.jpeg?auto=compress&cs=tinysrgb&w=600"
            width="100%"
            height="119.8%"
            style={{ "border-radius": "25px"}}
          />
          <h3>Ascend Quantum</h3>
          <span className="notch"></span>
        </Tilt>
      </div>
    </>
  );
};
