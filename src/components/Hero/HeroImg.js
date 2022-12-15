import React from "react";
import "./HeroImg.css";
import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div>
      <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="" />
        </div>
        <div className="content">
          <p>Hello.. I am</p>
          <h1>Md. Tahmidur Rahman</h1>
          <p>Web Developer</p>
        </div>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
