import React from 'react'
import "./NavL.css"
import { FaTwitter, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa'


const NavL = () => {
  return (
    <div className="navl">
        <li className='navl-li'>
          <a href=""><FaTwitter /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaLinkedin /></a>
          <a href=""><FaTelegram /></a>
        </li>
    </div>
  )
}

export default NavL