import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./Home.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import myphoto from "./Assets/myphoto.jpeg"
import mycv from './Assets/Mohd_Mustajab_Resume.pdf'
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div>
     <Navbar/>
     <div className="mainpg">
  <div className="intro">
    <h3>Hii<b>,</b>I am</h3>
    <h1>Mohd Mustajab</h1>
    <div>
      <span id="typing">
      <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Web <b>Developer</b>")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("A <b>III year</b> Student")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Pursuing <b>BTech</b>")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("<b>Welcomes </b>You!!")
                        .start();
                }}
            />
      </span>
    </div>
    <div className="sm"><a href="https://www.instagram.com/mj__this_side/" target="_blank"><FaInstagram /></a>
      <a href="https://www.facebook.com/mohdmustjab.khan" target="_blank"><FaFacebook /></a>
      <a href="https://www.linkedin.com/in/mohd-mustajab-174374271/" target="_blank"><FaLinkedin />
</a>
      <a href="https://github.com/mohd-mustajab" target="_blank"><FaGithub />
</a>
      <a href="https://twitter.com/MohdMustajab002" target="_blank"><FaSquareXTwitter />
</a>
    </div>
    <div className="btn"><a download={mycv} href={mycv}>Download CV</a></div>
  </div>
  <img src={myphoto} alt="" className="img" width="500px" height="500px" />
</div>
<Footer/>
    </div>
  )
}

export default Home
