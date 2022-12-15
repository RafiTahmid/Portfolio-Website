import React from "react";
import "./HeroImg.css";
import IntroImg from "../../assets/intro-bg.jpg";

const HeroImg = () => {
  return (
    <div>
      <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
