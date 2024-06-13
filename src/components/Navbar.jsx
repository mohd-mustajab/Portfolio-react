import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  // const Opensidebar=()=>{
  // let OpenSB=document.getElementById('profile');
  // let sidebar=document.getElementById('sidebar');
  // OpenSB.style.display="none"
  // sidebar.style.display="flex";
  // }
  return (
    <>
      <div id='loader'></div>
      <nav className="nav">
        <div className="name">
          Portfolio<b>.</b>
        </div>
        <ul>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/"><li>Home</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/About"><li>About</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/Contact"><li>Contact</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/Project"><li>Projects</li></NavLink>
        </ul>
        <div id="profile"><IoMdMenu /></div>
        <div id="sidebar">
        </div>
      </nav>
    </>
  )
}

export default Navbar
