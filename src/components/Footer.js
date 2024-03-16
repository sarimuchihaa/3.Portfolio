import "./FooterStyles.css"
import React from 'react'
import { FaHome,  FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem"}}/>
            <div>
            <p>123 Palm Villas.</p>
            <p>Pakistan.</p>
            </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem"}}/>1-1122-334-45</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem"}}/>sarim1@gmail.com</h4>
            </div>
                <div>
                </div>
            </div>
        <div className="right">
        <h4>About the company</h4>
        <p>This is Sarim Ali, member of Technsol. I love using cutting edge technologies and solve complex problems.</p>
        <div className="social">
        <FaFacebook size={30} style={{ color: "white", marginRight: "1rem"}}/>
        <FaTwitter size={30} style={{ color: "white", marginRight: "1rem"}}/>
        <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem"}}/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
