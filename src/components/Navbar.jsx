import React, { useState } from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const OpenSB = () => {
    setSidebarOpen(true);
  };

  const CloseSB = () => {
    setSidebarOpen(false);
  };
return (
  <>
      <div id='loader'></div>
      <nav className="nav">
        <div className="name">
          Portfolio<b>.</b>
        </div>
        
        <ul className='NavLinks'>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/"><li>Home</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/About"><li>About</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/Contact"><li>Contact</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/Project"><li>Projects</li></NavLink>
        </ul>
        <div id="OpenSB" onClick={OpenSB}><IoMdMenu /></div>
        <div id="sidebar" style={{ display: sidebarOpen ? 'flex' : 'none' }}>
          <div id="cross" onClick={CloseSB}><RxCross2 /></div>
          <div className="SidebarLinks">
          <ul>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/"><li>Home</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/About"><li>About</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/Contact"><li>Contact</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "Linkcolor" : "" }} to="/Project"><li>Projects</li></NavLink>
        </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
