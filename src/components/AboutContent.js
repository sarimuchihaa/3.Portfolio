import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import About1 from "../assets/About1.jpg"
import About2 from "../assets/About2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a react front-end developer. I create responsive secure websites for my clients.</p>
        <Link to="/contact"><button className="btn">Contact</button></Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={About1} className="img" alt="About1"/>
            </div>
            <div className="img-stack bottom">
                <img src={About2} className="img" alt="About2"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
