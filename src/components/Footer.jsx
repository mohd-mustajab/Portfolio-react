import React from 'react'
import "./Footer.css"
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>
  <div className="footer">
    <div className="cards one">
      <h1>mj.<b>..</b></h1>
    </div>
    <div className="cards two">
      <h1>Menu</h1>
      <li><a href="/">Home</a></li>
      <li><a href="About.html">About</a></li>
      <li><a href="Contact.html">Contact</a></li>
      <li><a href="project.html">Projects</a></li>
    </div>
    <div className="cards three">
      <h1>Address</h1>
      <p><FaLocationDot/> Shastripuram,Hyderabad 500052</p>
    </div>
  
    <div className="cards four">
    <div className="sm2"><a href="https://www.instagram.com/mj__this_side/" target="_blank"><IoLogoInstagram /></a>
            <a href="https://www.facebook.com/mohdmustjab.khan" target="_blank"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/mohd-mustajab-174374271/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/mohd-mustajab" target="_blank"><FaGithub /></a>
            <a href="https://twitter.com/MohdMustajab002" target="_blank"><FaSquareXTwitter /></a>
          </div>
    </div>
    <div className="cards five">
      <h1>Email</h1>
      <p><LuMail /> mohdmustajab002@gmail.com </p>
    </div>
    <div className="cards six">
      <h1>Phone</h1>
      <p><FaPhoneAlt /> +918077144723 </p>
    </div>
    </div>
  <div className="copyright">copyright © Developed by<b>MUSTAJAB</b></div>
</footer>
  )
}

export default Footer
