import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./About.css"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mainpg">
        <p className="heading">About:</p>
        <div className="description">Hello,My Name is <b>Mohd Mustajab</b>.I am persuing my <b>Bachelor of Technology</b> in <b>Mahaveer Institute Of Science And Technology,Hyderabad</b>.I am a <b>student</b> seeking a challenging role as a <b>web developer </b>where i can utilize my technical skills and creativity to develop innovative web application.
          <div className="heading2">Skills:</div>
          <div className="skill html"><div /></div><p><FaHtml5 /> Html</p>
          <div className="skill css"><div /></div><p><IoLogoCss3 /> CSS</p>
          <div className="skill javascript"><div/></div><p><IoLogoJavascript /> JavaScript</p>
          <div className="skill react"><div /></div><p><FaReact /> React.js</p>
          <div className="skill java"><div /></div><p><FaJava /> Java</p>
          <div className="skill cpp"><div /></div><p><TbBrandCpp /> C++</p>
          <div className="skill c"><div /></div><p><FaCode /> C</p>
        </div></div>
        <Footer/>
    </div>
  )
}

export default About
