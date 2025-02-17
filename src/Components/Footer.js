import "./FooterStyles.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Kafaraakka Al Koura</p>
                        <p>Lebanon</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    81 698 935</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    Johnnyelias003@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <p>Where Logic Meets Creativity.</p>
                <div className="social">
                    <FaFacebook size={20} style={{color:"#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={20} style={{color:"#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={20} style={{color:"#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer