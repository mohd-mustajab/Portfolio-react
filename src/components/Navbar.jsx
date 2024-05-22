import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
      </nav>
    </>
  )
}

export default Navbar
