import './Navbar.css'
import logo from '../../assets/img/logo.webp'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTripadvisor } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaBars } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <header>
      <nav className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="content">
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/menu'>Menu</NavLink>
          </li>
          <li>
            <NavLink to='/reservation'>
            Reservation</NavLink>
          </li>
          <li>
            <NavLink to='/gallery'>Gallery   </NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/blog'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="icon">
      <FaTripadvisor />
      <FaFacebook />
      <FaTwitter />
      <FaBars />

      </div>

    </nav>
      </header>
    </>
  )
}

export default Navbar
