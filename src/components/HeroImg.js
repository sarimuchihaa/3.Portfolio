import "./HeroImgStyles.css";
import React from 'react';
import HeroImage from "../assets/HeroImage.png";
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={HeroImage} alt="HeroImage"/>
      </div>
      <div className="content">
        <p>Hi, I'M SARIM WEB DEVELOPER.</p>
        <h1>React Developer.</h1>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  );
};

export default HeroImg;
